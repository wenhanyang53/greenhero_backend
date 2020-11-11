'use strict';
var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectID;
var url = "mongodb://localhost:27017/";


/**
 *
 * body TemperatureDesired To create new TemperatureDesired
 * no response value expected for this operation
 **/
exports.createTemperatureDesired = function (body) {
  return new Promise(function (resolve, reject) {
    MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
      if (err) throw err;
      var dbo = db.db("greenhero");
      dbo.collection("TemperatureDesired").insertOne({
        "time": body.time,
        "temperature": body.temperature,
      }, function (err, result) {
        if (err) throw err;
        resolve(result);
        db.close();
      });
    });
  });
}


/**
 * Delete TemperatureDesired by time
 *
 * time date The time of the TemperatureDesired
 * no response value expected for this operation
 **/
exports.deleteTemperatureDesiredByTime = function (time) {
  return new Promise(function (resolve, reject) {
    MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
      if (err) throw err;
      var dbo = db.db("greenhero");
      dbo.collection("TemperatureDesired").deleteOne({
        "time": time,
      }, function (err, result) {
        if (err) throw err;
        resolve(result);
        db.close();
      });
    });
  });
}


/**
 * Get TemperatureDesired
 * See the TemperatureDesired
 *
 * returns List
 **/
exports.getAllTemperatureDesired = function () {
  return new Promise(function (resolve, reject) {
    MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
      if (err) throw err;
      var dbo = db.db("greenhero");
      dbo.collection("TemperatureDesired").find().toArray(function (err, result) {
        if (err) throw err;
        resolve(result);
        db.close();
      });
    });
  });
}

exports.getTemperatureDesiredByTime = function (time) {
  return new Promise(function (resolve, reject) {
    MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
      if (err) throw err;
      var dbo = db.db("greenhero");
      var whereStr = { "time": time };  // condition
      dbo.collection("TemperatureDesired").find(whereStr).toArray(function (err, result) {
        if (err) throw err;
        resolve(result);
        db.close();
      });
    });
  });
}

exports.creatTemperatureDesiredByTimeAndTemperature = function(time, temperature){
  return new Promise(function (resolve, reject) {
    MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
      if (err) throw err;
      var dbo = db.db("greenhero");
      dbo.collection("TemperatureDesired").insertOne({
        "time": time,
        "temperature": temperature,
      }, function (err, result) {
        if (err) throw err;
        resolve(result);
        db.close();
      });
    });
  });
}