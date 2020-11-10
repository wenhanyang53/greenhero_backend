'use strict';
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
var ObjectId = require('mongodb').ObjectId;
var Character = require('../service/CharacterService');
var Application = require('../service/ApplicationService');
var User = require('../service/UserService');

/**
 * Create a new team
 *
 * body Team To create a new team
 * no response value expected for this operation
 **/
exports.createTeam = function(body) {
  return new Promise(function(resolve, reject) {
    MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
      var myteamMembers=new Array();
      if(body.teamMembers != undefined){
        for (var i=0;i<body.teamMembers.length;i++)
          { 
            myteamMembers.push(ObjectId(body.teamMembers[i]))
          }
      }
      if (err) throw err;
      var dbo = db.db("greenhero");
      var myobj = { "teamName" : body.teamName,
                    "avatar" :body.avatar,
                    "event_id" : ObjectId(body.event_id),
                    "teamLeader" : ObjectId(body.teamLeader),
                    "teamMembers": myteamMembers};
      dbo.collection("Team").insertOne(myobj, function(err, res) {
          if (err) throw err;
          console.log("successful");
          resolve(res);
          db.close();
      });
    });
  });
}


/**
 * Delete team
 * To delete a team
 *
 * teamName String The name of the team that needs to be deleted
 * no response value expected for this operation
 **/
exports.deleteTeamByTeamName = function(teamName) {
  return new Promise(function(resolve, reject) {
    MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
      if (err) throw err;
      var dbo = db.db("greenhero");
      var whereStr = {"teamName":teamName};  // condition
      dbo.collection("Team").deleteOne(whereStr, function(err, obj) {
          if (err) throw err;
          console.log("successful");
          resolve();
          db.close();
      });
  });
  });
}


/**
 * Get teams
 * See the available teams
 *
 * returns List
 **/
exports.getAllTeams = function() {
  return new Promise(function(resolve, reject) {
    MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
      if (err) throw err;
      var dbo = db.db("greenhero");
      dbo.collection("Team").find().toArray(async function (err, result) {
        if (err) throw err;
        for(let team of result) {
          if(team.teamLeader) {
            team.teamLeader = await Character.getCharacterById(team.teamLeader);
          }
          if(team.teamMembers) {
            for(let i = 0;  i < team.teamMembers.length; i++) {
              const member = team.teamMembers[i];
              team.teamMembers[i] = await Character.getCharacterById(member);
            }
          }
          if(team.applications) {
            for(let i = 0;  i < team.applications.length; i++) {
              const application = team.applications[i];
              team.applications[i] = await Application.getApplicationById(application);
            }
          }
        }
        resolve(result);
        db.close();
      });
    });
    var examples = {};
    examples['application/json'] = [ {
  "teamName" : "teamName",
  "event_id" : "event_id",
  "_id" : "_id",
  "avatar" : "avatar",
  "teamLeader" : "teamLeader",
  "teamMembers" : [ "teamMembers", "teamMembers" ]
}, {
  "teamName" : "teamName",
  "event_id" : "event_id",
  "_id" : "_id",
  "avatar" : "avatar",
  "teamLeader" : "teamLeader",
  "teamMembers" : [ "teamMembers", "teamMembers" ]
} ];
  });
}

/**
 * Get number of people by profession and date
 *
 * returns List
 **/
exports.getNumberOfPeople = function(profession) {
  return new Promise(function(resolve, reject) {
    MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
      if (err) throw err;
      var dbo = db.db("greenhero");
      var num = 0;
      dbo.collection("Team").find().toArray(async function (err, result) {
        if (err) throw err;
        for(let team of result) {
          if(team.teamLeader) {
            var character = await Character.getCharacterById(team.teamLeader);
            var user = await User.getUser(character.user_id)
            if (user.personalInfo.occupation === profession){
                num += 1;
            }
          }
          if(team.teamMembers) {
            for(let i = 0;  i < team.teamMembers.length; i++) {
              const member = team.teamMembers[i];
              var character = await Character.getCharacterById(member);
              var user = await User.getUser(character.user_id)
              if (user.personalInfo.occupation === profession){
                num += 1;
            }
            }
          }
          if(team.applications) {
            for(let i = 0;  i < team.applications.length; i++) {
              const application = team.applications[i];
              team.applications[i] = await Application.getApplicationById(application);
            }
          }
        }
        resolve({total: num});
        db.close();
      });
    });
  });
}


/**
 * Modify team
 * To modify a team
 *
 * body Team Updated team object
 * no response value expected for this operation
 **/
exports.modifyTeam = function(body) {
  return new Promise(function(resolve, reject) {
    MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
      var myteamMembers=new Array();
      if(body.teamMembers != undefined){
        for (var i=0;i<body.teamMembers.length;i++)
          { 
            myteamMembers.push(ObjectId(body.teamMembers[i]))
          }
      }
      if (err) throw err;
      var dbo = db.db("greenhero");
      var whereStr = {"userName":userName};  // condition
      var updateStr = {$set: { "teamName" : body.teamName,
                                "avatar" :body.avatar,
                                "event_id" : ObjectId(body.event_id),
                                "teamLeader" : ObjectId(body.teamLeader),
                                "teamMembers": myteamMembers}};
      dbo.collection("Team").updateOne(whereStr, updateStr, function(err, res) {
          if (err) throw err;
          console.log("successful");
          db.close();
      });
  });
    resolve();
  });
}



exports.getTeamByEventIdAndUserId = function(event_id,user_id) {
  return new Promise(function(resolve, reject) {
    MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
      if (err) throw err;
      var dbo = db.db("greenhero");
      var whereStr = {$or:[{"event_id":ObjectId(event_id),"teamLeader":ObjectId(user_id)},
      {"event_id":ObjectId(event_id),"teamMembers":{$elemMatch:{$eq:ObjectId(user_id)}}}]};
      dbo.collection("Team"). find().toArray(function(err, result) { 
          if (err) throw err;
          resolve(result); 
          db.close();
      });
          });
  });
}

