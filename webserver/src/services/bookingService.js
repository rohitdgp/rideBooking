import bookingRepo from '../repositories/bookingRepo';
import {DriverService} from './driverService';

exports.BookingService = class {
    constructor(){
        this.driverService = new DriverService();
    }

    searchDrivers(rideType, location){

        let query = {
            location: location,
            ride: rideType
        }
        let result = this.driverService.findDriverByQuery();;

        return result;
    }

}