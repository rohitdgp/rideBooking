var Datastore = require('nedb');
var riderDb = new Datastore({ filename: '../resources/riderCollection.db', autoload: true });
var riderStateDb = new Datastore({ filename: '../resources/riderStateCollection.db', autoload: true });

exports.insertRecord = (doc) => {
    riderDb.insert(doc, function (err, newDoc) {
        if(err)
            console.log("Record insertion failed");
        else console.log("Record insertion succeeded");
    });
}

exports.findRecord = (query) => {
    riderDb.find(query, function (err, docs) {
      return docs;
    });
}

exports.updateRecord = (query, newDoc) => {
    riderDb.update(query, newDoc, {}, function (err, docs) {
        if(err)
            console.log("Record updation failed");
        else console.log("Record updation succeeded");
        return docs;
    });
}

exports.changeRiderState = (rider, uniqueId, status) => {
    let query = {
        id : uniqueId
    }

    let newDoc = {
        id: uniqueId,
        mobileNumber : rider.mobileNumber,
        name: rider.firstName +" "+ rider.lastName,
        state: status
    }
    riderStateDb.update(query, newDoc, {}, function(err, docs){
        if(err)
            console.log("Rider state update failed");
        else console.log("Rider state updated successfully");
        return docs;
    })
}

exports.getRiderSearchState = (uniqueId) => {
    let query = {
        id : uniqueId
    }

    riderStateDb.find(query, function(err, docs){
        return docs.length>0? docs[0]: null;
    })
}