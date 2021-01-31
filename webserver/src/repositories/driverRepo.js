var Datastore = require('nedb');
var db = new Datastore({ filename: '../resources/driverCollection.db', autoload: true });
let driverQueue = new Datastore({ filename: '../resources/driverQueueCollection.db', autoload: true });

exports.insertRecord = (doc) => {
    db.insert(doc, function (err, newDoc) {
        if(err)
            console.log("Record insertion failed");
        else console.log("Record insertion succeeded");
        return newDoc;
    });
}

exports.findRecord = (query) => {
    db.find(query, function (err, docs) {
        return docs;
    });
}

exports.updateRecord = (query, newDoc) => {
    db.find(query, newDoc, {}, function (err, docs) {
        if(err)
            console.log("Record updation failed");
        else console.log("Record updation succeeded");
        return docs;
    });
}

exports.addToQueue= (doc) => {
    driverQueue.insert(doc, function (err, newDoc) {
       if(err)
           console.log("Record insertion failed");
       else console.log("Record insertion succeeded");
       return newDoc;
    });
}

exports.updateQueue= (query, newDoc) => {
    driverQueue.update(query, newDoc, {}, function (err, newDoc) {
       if(err)
           console.log("Record update failed");
       else console.log("Record update succeeded");
       return newDoc;
    });
}