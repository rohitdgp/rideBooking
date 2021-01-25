exports.Location = class {
    long;
    latt;
    city;
    state;
    country;

    constructor(data){
        Object.assign(this, data);
    }
}