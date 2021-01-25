exports.Driver = class {
    firstName;
    lastName;
    ride;
    mobileNumber;
    location;
    status;
    rating;

    constructor(data){
        Object.assign(this, data);
    }

}