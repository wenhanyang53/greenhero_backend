'use strict';
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
var ObjectId = require('mongodb').ObjectId;
var PersonalInfo = require('../service/PersonalInfoService');

/**
 * Create User
 *
 * body User To create a new user
 * no response value expected for this operation
 **/
exports.createUser = function (body) {
  return new Promise(function (resolve, reject) {
    MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
      if (err) throw err;
      var dbo = db.db("greenhero");
      var myobj = {
        "userName": body.UserName,
        "userPassword": body.Password,
        "email": body.email,
        "abilityPoints": body.abilityPoints,
        "personalInfo": ObjectId(body.personalInfo),
        "typeOfUser": body.typeOfUser,
        "avatarUrl": body.avatarUrl,
        "consumption": body.consumption,
        "allowance": body.allowance
      };
      dbo.collection("User").insertOne(myobj, function (err, res) {
        if (err) throw err;
        console.log("successful");
        resolve(res);
        db.close();
      });
    });
  });
}


/**
 * Delete user
 * To delete a user entry
 *
 * userName String The username of the user that needs to be deleted
 * no response value expected for this operation
 **/
exports.deleteUserByUserName = function (userName) {
  return new Promise(function (resolve, reject) {
    MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
      if (err) throw err;
      var dbo = db.db("greenhero");
      var whereStr = { "userName": userName };  // condition
      dbo.collection("User").deleteOne(whereStr, function (err, obj) {
        if (err) throw err;
        console.log("successful");
        resolve();
        db.close();
      });
    });
  });
}


/**
 * Get user by user name
 * 
 *
 * userName String The name that needs to be fetched. Use user1 for testing. 
 * returns User
 **/
exports.getUserByUserName = function (userName) {
  return new Promise(function (resolve, reject) {
    MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
      if (err) throw err;
      var dbo = db.db("greenhero");
      var whereStr = { "userName": userName };  // condition
      dbo.collection("User").find(whereStr).toArray(function (err, result) {
        if (err) throw err;
        resolve(result);
        db.close();
      });
    });
    var examples = {};
    examples['application/json'] = {
      "personalInfo": "personalInfo",
      "typeOfUser": "typeOfUser",
      "abilityPoints": 0,
      "UserName": "UserName",
      "avatarUrl": "avatarUrl",
      "consumption": "consumption",
      "allowance": {
        "01_2020": 6.02745618307040320615897144307382404804229736328125,
        "10_2020": 4.1456080298839363962315474054776132106781005859375,
        "07_2020": 9.301444243932575517419536481611430644989013671875,
        "09_2020": 2.027123023002321833274663731572218239307403564453125,
        "02_2020": 1.46581298050294517310021547018550336360931396484375,
        "06_2020": 7.061401241503109105224211816675961017608642578125,
        "05_2020": 2.3021358869347654518833223846741020679473876953125,
        "11_2020": 7.3862819483858839220147274318151175975799560546875,
        "03_2020": 5.962133916683182377482808078639209270477294921875,
        "04_2020": 5.63737665663332876420099637471139430999755859375,
        "08_2020": 3.61607674925191080461672754609026014804840087890625,
        "12_2020": 1.231513536777255612975068288506008684635162353515625
      },
      "_id": "_id",
      "email": "email",
      "Password": "Password"
    };
  });
}

/**
 * Get user by user name
 * 
 *
 * userName String The name that needs to be fetched. Use user1 for testing. 
 * returns User
 **/
exports.getUser = function (userId) {
  return new Promise(function (resolve, reject) {
    MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
      if (err) throw err;
      var dbo = db.db("greenhero");
      dbo.collection("User").findOne({
        "_id": ObjectId(userId)
      }).then(async function (result) {
          if (result.personalInfo) {
            result.personalInfo = await PersonalInfo.getPersonalInfoByUserId(result._id);
          }
        resolve(result);
        db.close();
      });
    });
  });
}


/**
 * Logs user into the system
 *
 * userName String The user name for login
 * userPassword String The password for login in clear text
 * no response value expected for this operation
 **/
exports.loginUser = function (userName, userPassword) {
  return new Promise(function (resolve, reject) {
    MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
      if (err) throw err;
      var dbo = db.db("greenhero");
      dbo.collection("User").find({ "userName": userName, "userPassword": userPassword }).toArray(function (err, result) {
        if (err) throw err;
        resolve(result);
        db.close();
      });
    });
  });
}


/**
 * Modify user
 * To modify a a username/Password 
 *
 * userName String The username of the user that needs to be modified
 * body User Updated user object
 * no response value expected for this operation
 **/
exports.modifyUser = function (userName, body) {
  return new Promise(function (resolve, reject) {
    MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
      if (err) throw err;
      var dbo = db.db("greenhero");
      var whereStr = { "userName": userName };  // condition
      var updateStr = {
        $set: {
          "userName": body.UserName,
          "userPassword": body.Password,
          "email": body.email,
          "abilityPoints": body.abilityPoints,
          "personalInfo": ObjectId(body.personalInfo),
          "typeOfUser": body.typeOfUser,
          "avatarUrl": body.avatarUrl,
          "consumption": body.consumption,
          "allowance": body.allowance
        }
      };
      dbo.collection("User").updateOne(whereStr, updateStr, function (err, res) {
        if (err) throw err;
        console.log("successful");
        db.close();
      });
    });
    resolve();
  });
}

exports.getCoinAmountByUserId = function(user_id){
  return new Promise(function (resolve, reject) {
    MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
      if (err) throw err;
      var dbo = db.db("greenhero");
      dbo.collection("User").find({ "_id": ObjectId(user_id)},{"_id": 0, "abilityPoints": 1}).toArray(function (err, result) {
        if (err) throw err;
        resolve(result);
        db.close();
      });
    });
  });
}

