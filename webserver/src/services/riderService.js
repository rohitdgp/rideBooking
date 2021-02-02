import riderRepo from '../repositories/riderRepo';
import rideRepo from '../repositories/rideRepo';
import {BookingService} from './bookingService';
import {DriverService} from './driverService';

exports.RiderService = class {
    constructor(){
        this.bookingService = new BookingService();
        this.driverService = new DriverService();
    }

    addRider(res,record){
        //if(isRecordValid(record)){
            riderRepo.insertRecord(record);
            res.status(200).send("Success");

        
    }

    updateRider(res,record){
        if(isRecordValid(record)){
            riderRepo.updateRecord({mobile: record.mobile}, record);
            res.status(200).send("Success");
        }
        else res.status(415).send("Invalid record.");
        
    }

    findRiderByQuery(query){
        riderRepo.findRecord(query);
    }

    initiateSearch(location, destination, rider, rideType){

        let uniqueSearchId = Date.now(); //Making current mill time as unique ID for the search.

        let drivers = this.bookingService.searchDrivers(rideType, location);

        if(drivers.length > 0){
            this.driverService.broadcastToDrivers(drivers, uniqueSearchId, location, this.calculateDistance(location, destination));
            riderRepo.addRiderState(rider, uniqueSearchId, "SEARCHING");
        }

        let currentMillis = Date.now();

        let acceptedDriver = "", timeout = 30000; //Timeout set to 30 secs

        while((timeout > (Date.now() - currentMillis)) && this.checkSearchState(uniqueSearchId)==="SEARCHING"){

        }

        if(this.checkSearchState(uniqueSearchId)!=="SEARCHING"){

            let matchedRide = this.getMatchedRide(uniqueSearchId);
            if(matchedRide!==null){
                riderRepo.changeRiderState(rider, uniqueSearchId, "ARRIVING");
                return matchedRide.driver;
            }
            else return {
                 rideDetails : {},
                 message: "No rides found. Please try again."
             }

        }else{
            //request timed out.
            riderRepo.changeRiderState(rider,uniqueSearchId, "TERMINATED", {});
            return {
                rideDetails : {},
                message: "No rides found. Please try again."
            }
        }

    }

    checkSearchState(uniqueSearchId){
        let state = riderRepo.getRiderSearchState(uniqueSearchId);
        return state.status;
    }

    calculateDistance(){
        //Calculate Geo Distance. Todo: Will complete later
        return "";
    }

    getMatchedRide(uniqueSearchId){
        let result = rideRepo.findRecord({id: uniqueSearchId});

        return result.length>0 ? result[0]: null;
    }
}