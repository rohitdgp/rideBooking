exports.QueryJson = class {
    firstName;
    lastName;
    mobileNumber;
    status;

    constructor(data){
        Object.assign(this, data);
    }
}