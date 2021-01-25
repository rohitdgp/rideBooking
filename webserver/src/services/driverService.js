import driverRepo from '../repositories/driverRepo';

exports.DriverService = class {
    constructor(){

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
}