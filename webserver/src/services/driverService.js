import driverRepo from '../repositories/driverRepo';
import rideRepo from '../repositories/rideRepo';
import {RiderService} from './riderService';

exports.DriverService = class {
    constructor(){
        this.riderService = new RiderService();
    }

    addDriver(res,record){
        if(isRecordValid(record)){
            driverRepo.insertRecord(record);
            res.status(200).send("Sucess");
        }
        else res.status(415).send("Invalid record.");
        
    }

    updateDriver(res,record){
        if(isRecordValid(record)){
            driverRepo.insertRecord(record);
            res.status(200).send("Sucess");
        }
        else res.status(415).send("Invalid record.");
        
    }

    findDriverByQuery(query){
        driverRepo.findRecord(query);
    }

    broadcastToDrivers(drivers, uniqueSearchId, pickupLocation, totalDistance){
        drivers.forEach(driver => {
            this.addToDriverRideQueue(driver, uniqueSearchId, pickupLocation, totalDistance);
        })
    }

    acceptRequest(driver, uniqueSearchId){
        if(this.riderService.checkSearchState(uniqueSearchId)==="SEARCHING"){
            rideRepo.updateRecord({id:uniqueSearchId}, {id:uniqueSearchId, driver: driver});
            this.removeFromDriverQueue(driver, uniqueSearchId);
        }else{
            this.removeFromDriverQueue(driver, uniqueSearchId);
        }
    }

    addToDriverRideQueue(driver, uniqueSearchId, pickupLocation, totalDistance){
        driverRepo.addToQueue({
            mobileNumber: driver.mobileNumber,
            searchId: uniqueSearchId
            pickupLocation: pickupLocation,
            totalDistance: totalDistance,
            status: "ACTIVE"
        })
    }

    removeFromDriverQueue(driver, uniqueSearchId){
        driverRepo.updateQueue({mobileNumber: mobileNumber},{
            mobileNumber: driver.mobileNumber,
            searchId: uniqueSearchId
            pickupLocation: pickupLocation,
            totalDistance: totalDistance,
            status: "INVALID"
        })
    }
}