'use strict';
var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectID;
var url = "mongodb://localhost:27017/";


/**
 *
 * body Temperature To create new Temperature
 * no response value expected for this operation
 **/
exports.createTemperature = function (body) {
  return new Promise(function (resolve, reject) {
    MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
      if (err) throw err;
      var dbo = db.db("greenhero");
      dbo.collection("Temperature").insertOne({
        "time": body.time,
        "temperature": body.temperature,
      }, function (err, result) {
        if (err) throw err;
        console.log(result);
        resolve(result);
        db.close();
      });
    });
  });
}


/**
 * Delete temperature by time
 *
 * time date The time of the temperature
 * no response value expected for this operation
 **/
exports.deleteTemperatureByTime = function (time) {
  return new Promise(function (resolve, reject) {
    MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
      if (err) throw err;
      var dbo = db.db("greenhero");
      dbo.collection("Temperature").deleteOne({
        "time": time,
      }, function (err, result) {
        if (err) throw err;
        console.log(result);
        resolve(result);
        db.close();
      });
    });
  });
}


/**
 * Get temperature
 * See the Temperature
 *
 * returns List
 **/
exports.getAllTemperature = function () {
  return new Promise(function (resolve, reject) {
    MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
      if (err) throw err;
      var dbo = db.db("greenhero");
      dbo.collection("Temperature").find().toArray(function (err, result) {
        if (err) throw err;
        console.log(result);
        resolve(result);
        db.close();
      });
    });
    var examples = {};
    examples['application/json'] = [{
      "temperature": 0.80082819046101150206595775671303272247314453125,
      "_id": "_id",
      "time": "2000-01-23"
    }, {
      "temperature": 0.80082819046101150206595775671303272247314453125,
      "_id": "_id",
      "time": "2000-01-23"
    }];
  });
}

