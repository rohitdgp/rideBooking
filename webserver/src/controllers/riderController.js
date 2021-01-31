import {RiderService} from '../services/riderService';

const riderService = new RiderService();
exports.addRider = (req, res) => {
    if(req.body!==null && req.body!==undefined){
        riderService.addRider(res, new Rider(req.body));
        // res.status(200).send("Sucess");
    }
    else res.status(415).send("Invalid record.");
}

exports.updateRider = (req, res) => {
    if(req.body!==null && req.body!==undefined){
        riderService.updateRider(res, new Rider(req.body));
        // res.status(200).send("Sucess");
    }
    else res.status(415).send("Invalid record.");
}

exports.getRider = (req, res) => {
    if(req.params.id!==null && req.params.id!==undefined){

        riderService.findRiderByQuery()
    }
}

exports.getRideHistory = (req, res) => {

}