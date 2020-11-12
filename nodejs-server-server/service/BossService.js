'use strict';
var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectID;
var url = "mongodb+srv://admin:admin@cluster0.pilql.mongodb.net/greenhero?retryWrites=true&w=majority";


/**
 * Create a new boss
 *
 * body Boss To create a new boss
 * no response value expected for this operation
 **/
exports.createBoss = function (body) {
  return new Promise(function (resolve, reject) {
    MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
      if (err) throw err;
      var dbo = db.db("greenhero");
      dbo.collection("Boss").insertOne({
        "bossName": body.bossName,
        "bossDescription": body.bossDescription,
        "avatar": body.avatar,
        "health": body.health,
        "armor": body.armor,
        "attack": body.attack,
        "healing_factor": body.healing_factor
      },function (err, result) {
        if (err) throw err;
        resolve(result);
        db.close();
      });
    });
  });
}


/**
 * Delete boss
 * To delete a boss
 *
 * bossName String The name of the boss that needs to be deleted
 * no response value expected for this operation
 **/
exports.deleteBossByBossName = function (bossName) {
  return new Promise(function (resolve, reject) {
    MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
      if (err) throw err;
      var dbo = db.db("greenhero");
      dbo.collection("Boss").deleteOne({
        "bossName": bossName,
      },function (err, result) {
        if (err) throw err;
        resolve(result);
        db.close();
      });
    });
  });
}


/**
 * Get bosses
 * See the available bosses
 *
 * returns List
 **/
exports.getAllBoss = function () {
  return new Promise(function (resolve, reject) {
    MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
      if (err) throw err;
      var dbo = db.db("greenhero");
      dbo.collection("Boss").find().toArray(function (err, result) {
        if (err) throw err;
        resolve(result);
        db.close();
      });
    });
    var examples = {};
    examples['application/json'] = [{
      "armor": 6.02745618307040320615897144307382404804229736328125,
      "bossName": "bossName",
      "attack": 1.46581298050294517310021547018550336360931396484375,
      "health": 0.80082819046101150206595775671303272247314453125,
      "_id": "_id",
      "avatar": "avatar",
      "bossDescription": "bossDescription",
      "healing_factor": 5.962133916683182377482808078639209270477294921875
    }, {
      "armor": 6.02745618307040320615897144307382404804229736328125,
      "bossName": "bossName",
      "attack": 1.46581298050294517310021547018550336360931396484375,
      "health": 0.80082819046101150206595775671303272247314453125,
      "_id": "_id",
      "avatar": "avatar",
      "bossDescription": "bossDescription",
      "healing_factor": 5.962133916683182377482808078639209270477294921875
    }];
  });
}

/**
 * Get a boss by ID
 * See the boss by ID
 * _id String The ID of the Boss
 * returns Boss
 **/
exports.getBossById = function (_id) {
  return new Promise(function (resolve, reject) {
    MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
      if (err) throw err;
      var dbo = db.db("greenhero");
      const whereStr = {'_id': new ObjectId(_id)};
      dbo.collection("Boss").findOne(whereStr).then(function (result) {
        if (err) throw err;
        resolve(result);
        db.close();
      });
    });
    var examples = {};
    examples['application/json'] = [{
      "armor": 6.02745618307040320615897144307382404804229736328125,
      "bossName": "bossName",
      "attack": 1.46581298050294517310021547018550336360931396484375,
      "health": 0.80082819046101150206595775671303272247314453125,
      "_id": "_id",
      "avatar": "avatar",
      "bossDescription": "bossDescription",
      "healing_factor": 5.962133916683182377482808078639209270477294921875
    }, {
      "armor": 6.02745618307040320615897144307382404804229736328125,
      "bossName": "bossName",
      "attack": 1.46581298050294517310021547018550336360931396484375,
      "health": 0.80082819046101150206595775671303272247314453125,
      "_id": "_id",
      "avatar": "avatar",
      "bossDescription": "bossDescription",
      "healing_factor": 5.962133916683182377482808078639209270477294921875
    }];
  });
}


/**
 * Modify boss
 * To modify a boss 
 *
 * body Boss Updated boss object
 * no response value expected for this operation
 **/
exports.modifyBoss = function (body) {
  return new Promise(function (resolve, reject) {
    MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
      if (err) throw err;
      var dbo = db.db("greenhero");
      var whereStr = {"_id":ObjectId(body._id)};  // condition
      var updateStr = {$set: { "bossName" : body.bossName,
                                "bossDescription" :body.bossDescription,
                                "avatar" : body.avatar,
                                "health" : body.health,
                                "armor": body.armor,
                                "attack": body.attack,
                                "healing_factor" :body.healing_factor}};
      dbo.collection("Boss").updateOne(whereStr, updateStr, function(err, res) {
          if (err) throw err;
          console.log("successful");
          db.close();
      });
  });
  resolve();
  });
}

