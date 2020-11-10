'use strict';

const { ObjectId } = require("mongodb");


/**
 * Create a new personal Info
 *
 * body PersonalInfo To create a new personal Info
 * no response value expected for this operation
 **/
exports.createPersonalInfo = function(body) {
  return new Promise(function(resolve, reject) {
    MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
      if (err) throw err;
      var dbo = db.db("greenhero");
      var myobj = { "user_id": ObjectId(body.user_id),
                    "realName": body.realName,
                    "occupation": body.occupation,
                    "biography" :body.biography,
                    "email": body.email,
                    "facebook":body.facebook,
                    "linkedin":body.linkedin,
                    "phone":body.phone};
      dbo.collection("personalInfo").insertOne(myobj, function(err, res) {
          if (err) throw err;
          console.log("successful");
          resolve(res);
          db.close();
      });
    });
  });
}


/**
 * Delete PersonalInfo
 * To delete a user's personal info
 *
 * user_id String The user_id of the personal info that needs to be deleted
 * no response value expected for this operation
 **/
exports.deletePersonalInfoByUserId = function(user_id) {
  return new Promise(function(resolve, reject) {
    MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
      if (err) throw err;
      var dbo = db.db("greenhero");
      var whereStr = {"user_id":ObjectId(user_id)};  // condition
      dbo.collection("personalInfo").deleteOne(whereStr, function(err, obj) {
          if (err) throw err;
          console.log("successful");
          resolve();
          db.close();
      });
  });
  });
}


/**
 * Find personal info of user's by user id
 *
 * user_id Integer user id of personal info to return
 * returns PersonalInfo
 **/
exports.getPersonalInfoByUserId = function(user_id) {
  return new Promise(function(resolve, reject) {
    MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
      if (err) throw err;
      var dbo = db.db("greenhero");
       var whereStr = {"user_id":ObjectId(user_id)};  // condition
      dbo.collection("personalInfo").find(whereStr).toArray(function(err, result) {
          if (err) throw err;
          resolve(result);
          db.close();
      });
  });
    var examples = {};
    examples['application/json'] = {
  "realName" : "realName",
  "occupation" : "occupation",
  "user_id" : "user_id",
  "phone" : "phone",
  "facebook" : "facebook",
  "_id" : "_id",
  "biography" : "biography",
  "linkedin" : "linkedin",
  "email" : "email"
};
  });
}


/**
 * Modify PersonalInfo
 * To modify a user's PersonalInfo 
 *
 * user_id String The user id of the personal information that needs to be modified
 * body PersonalInfo Updated personal info object
 * no response value expected for this operation
 **/
exports.modifyPersonalInfo = function(user_id,body) {
  return new Promise(function(resolve, reject) {
    MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
      if (err) throw err;
      var dbo = db.db("greenhero");
      var whereStr = {"user_id":ObjectId(user_id)};  // condition
      var updateStr = {$set: { "user_id": ObjectId(user_id),
                                "realName": body.realName,
                                "occupation": body.occupation,
                                "biography" :body.biography,
                                "email": body.email,
                                "facebook":body.facebook,
                                "linkedin":body.linkedin,
                                "phone":body.phone}};
      dbo.collection("personalInfo").updateOne(whereStr, updateStr, function(err, res) {
          if (err) throw err;
          console.log("successful");
          db.close();
      });
  });
    resolve();
  });
}

