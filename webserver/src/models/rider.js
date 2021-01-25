exports.Rider = class {
    firstName;
    lastName;
    mobileNumber;
    location;
    status;
    rating;

    constructor(data){
        Object.assign(this, data);
    }

}