'use strict';
var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectID;
var url = "mongodb+srv://admin:admin@cluster0.pilql.mongodb.net/greenhero?retryWrites=true&w=majority";


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
        "time": new Date(time),
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

/**
 * Get latest AcState
 * See the latest AcState
 *
 * returns AcState
 **/
exports.getLatestAcState = function () {
  return new Promise(function (resolve, reject) {
    MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
      if (err) throw err;
      var dbo = db.db("greenhero");
      dbo.collection("AcState").find().sort({"time": -1}).limit(1).toArray(function (err, result) {
        if (err) throw err;
        resolve(result[0]);
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
        "time": new Date(time),
        "state": state,
      }, function (err, result) {
        if (err) throw err;
        resolve(result);
        db.close();
      });
    });
  });
}

exports.createAcState = function (body) {
  return new Promise(function (resolve, reject) {
    MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
      if (err) throw err;
      var dbo = db.db("greenhero");
      dbo.collection("AcState").insertOne({
        "time": new Date(body.time),
        "state": body.state,
      }, function (err, result) {
        if (err) throw err;
        resolve(result);
        db.close();
      });
    });
  });
}
