import driverRepo from '../repositories/driverRepo';

exports.DriverService = class {
    constructor(){

    }

    addDriver(res,record){
        if(isRecordValid(record)){
            driverService.addDriver(record);
            res.status(200).send("Sucess");
        }
        else res.status(415).send("Invalid record.");
        driverRepo.insertRecord(record);
    }

    updateDriver(res,record){
        if(isRecordValid(record)){
            driverService.updateDriver(record);
            res.status(200).send("Sucess");
        }
        else res.status(415).send("Invalid record.");
        driverRepo.insertRecord(record);
    }

    findDriverByQuery(query){
        driverRepo.findRecord(query);
    }
}