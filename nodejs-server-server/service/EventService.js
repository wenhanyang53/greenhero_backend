'use strict';
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
var ObjectId = require('mongodb').ObjectId;
var Boss = require('../service/BossService');
/**
 * Create a new event
 *
 * body Event To create a new event
 * no response value expected for this operation
 **/
exports.createEvent = function(body) {
  return new Promise(function(resolve, reject) {
    MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
      if (err) throw err;
      var dbo = db.db("greenhero");
      var myobj = { "eventName" : body.EventName,
                    "eventDescription" :body.Description,
                    "openDate" : body.openDate,
                    "boss" : ObjectId(body.boss),
                    "src": body.src};
      dbo.collection("Event").insertOne(myobj, function(err, res) {
          if (err) throw err;
          console.log("successful");
          resolve(res);
          db.close();
      });
    });
  });
}


/**
 * Delete event
 * To delete an event
 *
 * eventName String The Eventname of the event that needs to be deleted
 * no response value expected for this operation
 **/
exports.deleteEventByEventName = function(eventName) {
  return new Promise(function(resolve, reject) {
    MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
      if (err) throw err;
      var dbo = db.db("greenhero");
      var whereStr = {"eventName":eventName};  // condition
      dbo.collection("Event").deleteOne(whereStr, function(err, obj) {
          if (err) throw err;
          console.log("successful");
          resolve();
          db.close();
      });
  });
  });
}


/**
 * Get Events
 * See the available events
 *
 * eventName String The Eventname of the event that needs to be modified
 * no response value expected for this operation
 **/
exports.getEventByEventName = function(eventName) {
  return new Promise(function(resolve, reject) {
    MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
      if (err) throw err;
      var dbo = db.db("greenhero");
       var whereStr = {"eventName":eventName};  // condition
      dbo.collection("Event").find(whereStr).toArray(async function(err, result) {
          if (err) throw err;
          for(let event of result) {
            event.boss = await Boss.getBossById(event.boss);
          }
          resolve(result);
          db.close();
      });
  });
  });
}


/**
 * Modify event
 * To modify an Event 
 *
 * eventName String The Eventname of the event that needs to be modified
 * body Event Updated Event object
 * no response value expected for this operation
 **/
exports.modifyEvent = function(eventName,body) {
  return new Promise(function(resolve, reject) {
    MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
      if (err) throw err;
      var dbo = db.db("greenhero");
      var whereStr = {"eventName":eventName};  // condition
      var updateStr = {$set: { "eventName" : body.EventName,
                                "eventDescription" :body.Description,
                                "openDate" : body.openDate,
                                "boss" : ObjectId(body.boss),
                                "src": body.src}};
      dbo.collection("Event").updateOne(whereStr, updateStr, function(err, res) {
          if (err) throw err;
          console.log("successful");
          db.close();
      });
  });
    resolve();
  });
}

