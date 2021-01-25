import {DriverService} from '../services/driverService';

const driverService = new DriverService();

exports.addDriver = (req, res) =>{
    
    // console.log(req);

    if(req.body!==null && req.body!==undefined){
        driverService.addDriver(res, new Driver(req.body));
        // res.status(200).send("Sucess");
    }
    else res.status(415).send("Invalid record.");
    
}

exports.updateDriver = (req, res) =>{
    if(req.body!==null && req.body!==undefined){
        driverService.updateDriver(res, new Driver(req.body));
        // res.status(200).send("Sucess");
    }
    else res.status(415).send("Invalid record.");
}

exports.getDriver = (req, res) =>{

}

exports.getRideHistory = (req, res) =>{

}