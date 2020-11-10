'use strict';
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
var ObjectId = require('mongodb').ObjectId;

/**
 *
 * body AdminAnnounces To create new admin announce
 * no response value expected for this operation
 **/
exports.createAdminAnnounce = function(body) {
  return new Promise(function(resolve, reject) {
    MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
      if (err) throw err;
      var dbo = db.db("greenhero");
      var myobj = { "icon" : body.icon,
                    "title" :body.title,
                    "content" : body.content};
      dbo.collection("AdminAnnounces").insertOne(myobj, function(err, res) {
          if (err) throw err;
          console.log("successful");
          resolve(res);
          db.close();
      });
    });
  });
}


/**
 * Delete adminAnnounce
 *
 * _id String The ID of the AdminAnnounces
 * no response value expected for this operation
 **/
exports.deleteAdminAnnounce = function(_id) {
  return new Promise(function(resolve, reject) {
    MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
      if (err) throw err;
      var dbo = db.db("greenhero");
      var whereStr = {"_id":ObjectId(_id)};  // condition
      dbo.collection("AdminAnnounces").deleteOne(whereStr, function(err, obj) {
          if (err) throw err;
          console.log("successful");
          resolve();
          db.close();
      });
  });
  });
}


/**
 * Get Admin Announces
 * See the Admin Announces
 *
 * returns List
 **/
exports.getAllAdminAnnounces = function() {
  return new Promise(function(resolve, reject) {
    MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
      if (err) throw err;
      var dbo = db.db("greenhero");
      dbo.collection("AdminAnnounces").find().toArray(function(err, result) {
          if (err) throw err;
          resolve(result);
          db.close();
      });
  });
    var examples = {};
    examples['application/json'] = [ {
  "icon" : "icon",
  "_id" : "_id",
  "title" : "title",
  "content" : "content"
}, {
  "icon" : "icon",
  "_id" : "_id",
  "title" : "title",
  "content" : "content"
} ];
  });
}


/**
 * Modify AdminAnnounces
 * To modify a AdminAnnounces
 *
 * body AdminAnnounces modify the AdminAnnounce
 * no response value expected for this operation
 **/
exports.modifyAdminAnnounce = function(body) {
  return new Promise(function(resolve, reject) {
    MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
      if (err) throw err;
      var dbo = db.db("greenhero");
      var whereStr = {"_id":ObjectId(body._id)};  // condition
      var updateStr = {$set: {"icon" : body.icon,
                              "title" :body.title,
                              "content" : body.content}};
      dbo.collection("AdminAnnounces").updateOne(whereStr, updateStr, function(err, res) {
          if (err) throw err;
          console.log("successful");
          db.close();
      });
  });
    resolve();
  });
}

