'use strict';
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
var ObjectId = require('mongodb').ObjectId;

/**
 * Create a new mission
 *
 * body Mission To create a new mission
 * no response value expected for this operation
 **/
exports.createMission = function (body) {
  return new Promise(function (resolve, reject) {
    MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
      if (err) throw err;
      var dbo = db.db("greenhero");
      var myobj = { "title": body.title,
                    "description": body.description,
                    "value": body.value,
                    "goal": body.goal,
                    "reward": body.reward,
                    "image": body.image,
                    "deleted": body.deleted,
                    "type": body.type};
      dbo.collection("Mission").insertOne(myobj, function(err, res) {
          if (err) throw err;
          console.log("successful");
          resolve(res);
          db.close();
      });
    });
  });
}


/**
 * Delete mission
 * To delete a mission
 *
 * _id String The ID of the mission that needs to be deleted
 * no response value expected for this operation
 **/
exports.deleteMissionById = function (_id) {
  return new Promise(function (resolve, reject) {
    MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
      if (err) throw err;
      var dbo = db.db("greenhero");
      var whereStr = {"_id":ObjectId(_id)};  // condition
      dbo.collection("Mission").deleteOne(whereStr, function(err, obj) {
          if (err) throw err;
          console.log("successful");
          resolve();
          db.close();
      });
  });
  });
}


/**
 * Get missions
 * See the available missions
 *
 * returns List
 **/
exports.getAllMissions = function () {
  return new Promise(function (resolve, reject) {
    MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
      if (err) throw err;
      var dbo = db.db("greenhero");
      dbo.collection("Mission").find().toArray(function (err, result) {
        if (err) throw err;
        resolve(result);
        db.close();
      });
    });
    var examples = {};
    examples['application/json'] = [{
      "reward": 1,
      "image": "image",
      "goal": 6.02745618307040320615897144307382404804229736328125,
      "deleted": true,
      "description": "description",
      "_id": "_id",
      "title": "title",
      "type": "type",
      "value": 0.80082819046101150206595775671303272247314453125
    }, {
      "reward": 1,
      "image": "image",
      "goal": 6.02745618307040320615897144307382404804229736328125,
      "deleted": true,
      "description": "description",
      "_id": "_id",
      "title": "title",
      "type": "type",
      "value": 0.80082819046101150206595775671303272247314453125
    }];
  });
}


/**
 * Get mission
 * See the available missions
 *
 * title String The title of the mission.
 * type String The type of the mission.
 * returns Mission
 **/
exports.getMissionByTitleAndType = function(title,type) {
  return new Promise(function(resolve, reject) {
    MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
      if (err) throw err;
      var dbo = db.db("greenhero");
      dbo.collection("Mission"). find({"title":title,"type":type}).toArray(function(err, result) { 
          if (err) throw err;
          resolve(result); 
          db.close();
      });
          });
  });
}


/**
 * Modify mission
 * To modify a mission 
 *
 * body Mission Updated mission object
 * no response value expected for this operation
 **/
exports.modifyMission = function(body) {
  return new Promise(function(resolve, reject) {
    MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
      if (err) throw err;
      var dbo = db.db("greenhero");
      var whereStr = {"_id":ObjectId(body._id)};  // condition
      var updateStr = {$set: { "title" : body.title,
                                "description" :body.description,
                                "value" : body.value,
                                "goal" : body.goal,
                                "reward": body.reward,
                                "image": body.image,
                                "deleted": body.deleted,
                                "type" :body.type}};
      dbo.collection("Mission").updateOne(whereStr, updateStr, function(err, res) {
          if (err) throw err;
          console.log("successful");
          db.close();
      });
  });
  });
}

