'use strict';
var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectID;
var url = "mongodb://localhost:27017/";


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
      console.log(body.nodes);
      var mynodes=new Array();
      for (var i=0;i<body.nodes.length;i++)
        { 
          mynodes.push(ObjectId(body.nodes[i]))
        }
      console.log(mynodes);
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
exports.deleteSkillTreeById = function(_id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * get SkillTree
 * To get a skill tree by class
 *
 * _id String The class of the skill tree
 * returns SkillTree
 **/
exports.getSkillTreeByClass = function(_id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "nodes" : [ "nodes", "nodes" ],
  "_id" : "_id",
  "class" : "class"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
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
    resolve();
  });
}

