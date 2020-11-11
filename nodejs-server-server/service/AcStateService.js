'use strict';
var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectID;
var url = "mongodb://localhost:27017/";


/**
 * Delete AcState by time
 *
 * time date The time of the AcState
 * no response value expected for this operation
 **/
exports.deleteAcStateByTime = function (time) {
  return new Promise(function (resolve, reject) {
    MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
      if (err) throw err;
      var dbo = db.db("greenhero");
      dbo.collection("AcState").deleteOne({
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
 * Get AcState
 * See the AcState
 *
 * returns List
 **/
exports.getAllAcState = function () {
  return new Promise(function (resolve, reject) {
    MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
      if (err) throw err;
      var dbo = db.db("greenhero");
      dbo.collection("AcState").find().toArray(function (err, result) {
        if (err) throw err;
        resolve(result);
        db.close();
      });
    });
  });
}

exports.getAcStateByTime = function (time) {
  return new Promise(function (resolve, reject) {
    MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
      if (err) throw err;
      var dbo = db.db("greenhero");
      var whereStr = { "time": time };  // condition
      dbo.collection("AcState").find(whereStr).toArray(function (err, result) {
        if (err) throw err;
        resolve(result);
        db.close();
      });
    });
  });
}

exports.creatAcStateByTimeAndState = function(time, state){
  return new Promise(function (resolve, reject) {
    MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
      if (err) throw err;
      var dbo = db.db("greenhero");
      dbo.collection("AcState").insertOne({
        "time": time,
        "state": state,
      }, function (err, result) {
        if (err) throw err;
        resolve(result);
        db.close();
      });
    });
  });
}