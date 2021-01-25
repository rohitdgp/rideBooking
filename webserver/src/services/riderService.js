import riderRepo from '../repositories/riderRepo';

exports.DriverService = class {
    constructor(){

    }

    addRider(res,record){
        if(isRecordValid(record)){
            riderRepo.insertRecord(record);
            res.status(200).send("Sucess");
        }
        else res.status(415).send("Invalid record.");
        
    }

    updateRider(res,record){
        if(isRecordValid(record)){
            riderRepo.insertRecord(record);
            res.status(200).send("Sucess");
        }
        else res.status(415).send("Invalid record.");
        
    }

    findRiderByQuery(query){
        riderRepo.findRecord(query);
    }
}