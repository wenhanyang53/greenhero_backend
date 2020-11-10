'use strict';


/**
 * Create a new team
 *
 * body Team To create a new team
 * no response value expected for this operation
 **/
exports.createTeam = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
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
    resolve();
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
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
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
    resolve();
  });
}

