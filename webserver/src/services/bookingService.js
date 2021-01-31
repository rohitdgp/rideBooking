import bookingRepo from '../repositories/bookingRepo';

exports.BookingService = class {
    constructor(){

    }

    searchDrivers(location){
        if(getDriversByLocation(location)){
            let query = {
                location: location;
            }
            let result = driverService.getDriversByQuery(record);
            res.status(200).send(result);
        }
        else res.status(415).send("Invalid record.");
    }



}