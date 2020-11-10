'use strict';
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
var ObjectId = require('mongodb').ObjectId;
var SkillTree = require('../service/SkillTreeService');
var User = require('../service/UserService');

/**
 * Create a new character
 *
 * body Character To create a new character
 * no response value expected for this operation
 **/
exports.createCharacter = function(body) {
  return new Promise(function(resolve, reject) {
    MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
      if (err) throw err;
      var dbo = db.db("greenhero");
      var myobj = { "attack" : body.attack,
                    "armor" :body.armor,
                    "health" : body.health,
                    "avatar" : body.avatar,
                    "healing_factor" : body.healing_factor,
                    "user_id": ObjectId(body.user_id),
                    "skillTree": ObjectId(body.skillTree),
                    "characterName": body.characterName,
                    "characterDescription" :body.characterDescription};
      dbo.collection("Character").insertOne(myobj, function(err, res) {
          if (err) throw err;
          console.log("successful");
          resolve(res);
          db.close();
      });
    });
  });
}


/**
 * Delete character
 * To delete a character
 *
 * user_id String The user_id of the character that needs to be deleted
 * characterName String The characterName of the character that needs to be deleted
 * no response value expected for this operation
 **/
exports.deleteCharacterByUserIdAndCharacterName = function(user_id,characterName) {
  return new Promise(function(resolve, reject) {
    MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
      if (err) throw err;
      var dbo = db.db("greenhero");
      var whereStr = {"user_id":ObjectId(user_id),"characterName":characterName};  // condition
      dbo.collection("Character").deleteOne(whereStr, function(err, obj) {
          if (err) throw err;
          console.log("successful");
          resolve();
          db.close();
      });
  });
  });
}


/**
 * Get characters
 * See the available character
 *
 * user_id String The user_id of the character.
 * returns List
 **/
exports.getCharacterByUserId = function(user_id) {
  return new Promise(function(resolve, reject) {
    MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
      if (err) throw err;
      var dbo = db.db("greenhero");
       var whereStr = {"user_id":ObjectId(user_id)};  // condition
      dbo.collection("Character").find(whereStr).toArray(async function(err, result) {
          if (err) throw err;
          for(let char of result) {
            if(char.skillTree) {
              char.skillTree = await SkillTree.getSkillTreeById(char.skillTree);
            }
          }
          resolve(result);
          db.close();
      });
  });
    var examples = {};
    examples['application/json'] = [ {
  "skillTree" : "skillTree",
  "armor" : 6.02745618307040320615897144307382404804229736328125,
  "user_id" : "user_id",
  "attack" : 0.80082819046101150206595775671303272247314453125,
  "characterDescription" : "characterDescription",
  "characterName" : "characterName",
  "health" : 1.46581298050294517310021547018550336360931396484375,
  "_id" : "_id",
  "avatar" : "avatar",
  "healing_factor" : 5.962133916683182377482808078639209270477294921875
}, {
  "skillTree" : "skillTree",
  "armor" : 6.02745618307040320615897144307382404804229736328125,
  "user_id" : "user_id",
  "attack" : 0.80082819046101150206595775671303272247314453125,
  "characterDescription" : "characterDescription",
  "characterName" : "characterName",
  "health" : 1.46581298050294517310021547018550336360931396484375,
  "_id" : "_id",
  "avatar" : "avatar",
  "healing_factor" : 5.962133916683182377482808078639209270477294921875
} ];
  });
}


/**
 * Get character
 * See the available character
 *
 * user_id String The user_id of the character.
 * characterName String The characterName of the character.
 * returns Character
 **/
exports.getCharacterByUserIdAndCharacterName = function(user_id,characterName) {
  return new Promise(function(resolve, reject) {
    MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
      if (err) throw err;
      var dbo = db.db("greenhero");
      dbo.collection("Character"). findOne({"user_id":ObjectId(user_id),"characterName":characterName}).then(async function(result) { 
          if (err) throw err;
          if(result.skillTree) {
            result.skillTree = await SkillTree.getSkillTreeById(result.skillTree);
          }
          resolve(result); 
          db.close();
      });
          });
    var examples = {};
    examples['application/json'] = {
  "skillTree" : "skillTree",
  "armor" : 6.02745618307040320615897144307382404804229736328125,
  "user_id" : "user_id",
  "attack" : 0.80082819046101150206595775671303272247314453125,
  "characterDescription" : "characterDescription",
  "characterName" : "characterName",
  "health" : 1.46581298050294517310021547018550336360931396484375,
  "_id" : "_id",
  "avatar" : "avatar",
  "healing_factor" : 5.962133916683182377482808078639209270477294921875
};
  });
}

/**
 * Get character by ID
 * See the available character
 *
 * character_id String The _id of the character.
 * returns Character
 **/
exports.getCharacterById = function(character_id) {
  return new Promise(function(resolve, reject) {
    MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
      if (err) {
        console.log(err);
        throw err;
      };
      var dbo = db.db("greenhero");
      dbo.collection("Character").findOne({"_id":ObjectId(character_id)}).then(async function(result) { 
        if (err) {
          console.log(err);
          throw err;
        };
        if(result.skillTree) {
          result.skillTree = await SkillTree.getSkillTreeById(result.skillTree);
        }
        if(result.user_id) {
          result.user_id = await User.getUser(result.user_id);
        }
        resolve(result); 
        db.close();
      });
    });
    var examples = {};
    examples['application/json'] = {
  "skillTree" : "skillTree",
  "armor" : 6.02745618307040320615897144307382404804229736328125,
  "user_id" : "user_id",
  "attack" : 0.80082819046101150206595775671303272247314453125,
  "characterDescription" : "characterDescription",
  "characterName" : "characterName",
  "health" : 1.46581298050294517310021547018550336360931396484375,
  "_id" : "_id",
  "avatar" : "avatar",
  "healing_factor" : 5.962133916683182377482808078639209270477294921875
};
  });
}


/**
 * Modify character
 * To modify a character 
 *
 * body Character To create a new character
 * no response value expected for this operation
 **/
exports.modifyCharacter = function(body) {
  return new Promise(function(resolve, reject) {
    MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
      if (err) throw err;
      var dbo = db.db("greenhero");
      var whereStr = {"_id":ObjectId(body._id)};  // condition
      var updateStr = {$set: { "attack" : body.attack,
                                "armor" :body.armor,
                                "health" : body.health,
                                "avatar" : body.avatar,
                                "healing_factor" : body.healing_factor,
                                "user_id": ObjectId(body.user_id),
                                "skillTree": ObjectId(body.skillTree),
                                "characterName": body.characterName,
                                "characterDescription" :body.characterDescription}};
      dbo.collection("Character").updateOne(whereStr, updateStr, function(err, res) {
          if (err) throw err;
          console.log("successful");
          db.close();
      });
  });
    resolve();
  });
}

