exports.Ride = class {
    plateNumber;
    type;
    uniqueId;
    location;
    status;
    brand;


    constructor(data){
        Object.assign(this, data);
    }

}