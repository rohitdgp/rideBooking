import {Location} from "./location.js";

exports.Driver = class {
    firstName;
    lastName;
    ride;
    mobileNumber;
    location = new Location();
    status;
    rating;

    constructor(data){
        Object.assign(this, data);
    }

}