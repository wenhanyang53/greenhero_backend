'use strict';
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
var ObjectId = require('mongodb').ObjectId;

/**
 * Create a new node
 *
 * body Node To create a new node
 * no response value expected for this operation
 **/
exports.createNode = function(body) {
  return new Promise(function(resolve, reject) {
    MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
      var mysons=new Array();
      if(body.sons != undefined){
        for (var i=0;i<body.sons.length;i++)
          { 
            mysons.push(ObjectId(body.sons[i]))
          }
      }
      if (err) throw err;
      var dbo = db.db("greenhero");
      var myobj = {"ability": body.ability,
                    "type": body.type,
                    "amount": body.amount,
                    "augmentationType": body.augmentationType,
                    "cost": body.cost,
                    "sons":mysons,
                    "locked": body.locked,
                    "owned": body.owned};
      dbo.collection("Node").insertOne(myobj, function(err, res) {
          if (err) throw err;
          console.log("successful");
          resolve(res);
          db.close();
      });
    });
  });
}


/**
 * Delete Node
 * To delete a node
 *
 * _id String Id of node
 * no response value expected for this operation
 **/
exports.deleteNode = function(_id) {
  return new Promise(function(resolve, reject) {
    MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
      if (err) throw err;
      var dbo = db.db("greenhero");
      var whereStr = {"_id":ObjectId(_id)};  // condition
      dbo.collection("Node").deleteOne(whereStr, function(err, obj) {
          if (err) throw err;
          console.log("successful");
          resolve();
          db.close();
      });
  });
  });
}


/**
 * Modify node
 * To modify a node
 *
 * body Node modify the node
 * no response value expected for this operation
 **/
exports.modifyNode = function(body) {
  return new Promise(function(resolve, reject) {
    MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
      var mysons=new Array();
      if(body.sons != undefined){
        for (var i=0;i<body.sons.length;i++)
          { 
            mysons.push(ObjectId(body.sons[i]))
          }
      }
      if (err) throw err;
      var dbo = db.db("greenhero");
      var whereStr = {"_id":ObjectId(body._id)};  // condition
      var updateStr = {$set: { "ability": body.ability,
                                "type": body.type,
                                "amount": body.amount,
                                "augmentationType": body.augmentationType,
                                "cost": body.cost,
                                "sons":mysons,
                                "locked": body.locked,
                                "owned": body.owned}};
      dbo.collection("Node").updateOne(whereStr, updateStr, function(err, res) {
          if (err) throw err;
          console.log("successful");
          db.close();
      });
  });
    resolve();
  });
}

/**
 * Get a node by ID
 * To get a node by ID
 * _id String The ID of the node
 * return Node
 **/
exports.getNodeById = function(_id) {
  return new Promise(function(resolve, reject) {
    MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
      if (err) throw err;
      var dbo = db.db("greenhero");
      var whereStr = {"_id":ObjectId(_id)};  // condition
      dbo.collection("Node").findOne(whereStr).then(function(result) {
          if (err) throw err;
          resolve(result);
          db.close();
      });
  });
  });
}

