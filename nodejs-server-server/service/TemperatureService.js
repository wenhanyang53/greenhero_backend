'use strict';
var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectID;
var url = "mongodb+srv://admin:admin@cluster0.pilql.mongodb.net/greenhero?retryWrites=true&w=majority";


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
        resolve(result);
        db.close();
      });
    });
  });
}

/**
 * Get latest temperature
 * See the latest Temperature
 *
 * returns Temperature
 **/
exports.getLatestTemperature = function () {
  return new Promise(function (resolve, reject) {
    MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
      if (err) throw err;
      var dbo = db.db("greenhero");
      dbo.collection("Temperature").find().sort({"time": -1}).limit(1).toArray(function (err, result) {
        if (err) throw err;
        resolve(result[0]);
        db.close();
      });
    });
  });
}

exports.getTemperatureByTime = function (time) {
  return new Promise(function (resolve, reject) {
    MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
      if (err) throw err;
      var dbo = db.db("greenhero");
      var whereStr = { "time": time };  // condition
      dbo.collection("Temperature").find(whereStr).toArray(function (err, result) {
        if (err) throw err;
        resolve(result);
        db.close();
      });
    });
  });
}

exports.creatTemperatureByTimeAndTemperature = function(time, temperature){
  return new Promise(function (resolve, reject) {
    MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
      if (err) throw err;
      var dbo = db.db("greenhero");
      dbo.collection("Temperature").insertOne({
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