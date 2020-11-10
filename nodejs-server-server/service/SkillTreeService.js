'use strict';
var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectID;
var url = "mongodb://localhost:27017/";
var Node = require('../service/NodeService');

/**
 * Create a new skill tree
 *
 * body SkillTree To create a new skill tree
 * no response value expected for this operation
 **/
exports.createSkillTree = function (body) {
  return new Promise(function (resolve, reject) {
    MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
      if (err) throw err;
      var dbo = db.db("greenhero");
      var mynodes=new Array();
      for (var i=0;i<body.nodes.length;i++)
        { 
          mynodes.push(ObjectId(body.nodes[i]))
        }
      dbo.collection("SkillTree").insertOne({
        "class": body.class,
        "nodes": mynodes
      },function (err, result) {
        if (err) throw err;
        resolve(result);
        db.close();
      });
    });
  });
}


/**
 * Delete SkillTree by ID
 * To delete a skill tree by ID
 *
 * _id String The ID of the skill tree that needs to be deleted
 * no response value expected for this operation
 **/
exports.deleteSkillTreeById = function (_id) {
  return new Promise(function (resolve, reject) {
    MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
      if (err) throw err;
      var dbo = db.db("greenhero");
      dbo.collection("SkillTree").deleteOne({
        "_id": ObjectId(_id)
      },function (err, result) {
        if (err) throw err;
        resolve(result);
        db.close();
      });
    });
  });
}


/**
 * get SkillTree
 * To get a skill tree by Id
 *
 * _id String The Id of the skill tree
 * returns SkillTree
 **/
exports.getSkillTreeById = function(_id) {

  return new Promise(function(resolve, reject) {
    MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
      if (err) throw err;
      var dbo = db.db("greenhero");
      var whereStr = {"_id":ObjectId(_id)};  // condition
      dbo.collection("SkillTree").findOne(whereStr).then(async function(result) {
          if (err) throw err;
          for(let i = 0; i < result.nodes.length; i++) {
            const node = result.nodes[i];
            result.nodes[i] = await Node.getNodeById(node);
          }
          resolve(result);
          db.close();
      });
  });
    var examples = {};
    examples['application/json'] = {
  "nodes" : [ "nodes", "nodes" ],
  "_id" : "_id",
  "class" : "class"
};
  });
}


/**
 * Modify skill tree
 * To modify a skill tree
 *
 * body SkillTree Updated skill tree object
 * no response value expected for this operation
 **/
exports.modifySkillTree = function(body) {
  return new Promise(function(resolve, reject) {
    MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
      if (err) throw err;
      var mynodes=new Array();
      for (var i=0;i<body.nodes.length;i++)
        { 
          mynodes.push(ObjectId(body.nodes[i]))
        }
      var dbo = db.db("greenhero");
      var whereStr = {"_id":ObjectId(body._id)};  // condition
      var updateStr = {$set: { "class" : body.class,
                                "nodes" :mynodes}};
      dbo.collection("SkillTree").updateOne(whereStr, updateStr, function(err, res) {
          if (err) throw err;
          console.log("successful");
          db.close();
      });
  });
    resolve();
  });
}

