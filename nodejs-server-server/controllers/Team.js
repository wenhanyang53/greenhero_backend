'use strict';

var utils = require('../utils/writer.js');
var Team = require('../service/TeamService');

module.exports.createTeam = function createTeam (req, res, next) {
  var body = req.swagger.params['body'].value;
  Team.createTeam(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteTeamByTeamName = function deleteTeamByTeamName (req, res, next) {
  var teamName = req.swagger.params['teamName'].value;
  Team.deleteTeamByTeamName(teamName)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAllTeams = function getAllTeams (req, res, next) {
  Team.getAllTeams()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.modifyTeam = function modifyTeam (req, res, next) {
  var body = req.swagger.params['body'].value;
  Team.modifyTeam(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getTeamByEventIdAndUserId = function getTeamByEventIdAndUserId(req,res,next){
  var event_id = req.swagger.params['event_id'].value;
  var user_id = req.swagger.params['user_id'].value;
  Team.getTeamByEventIdAndUserId(event_id,user_id)
  .then(function (response) {
    utils.writeJson(res, response);
  })
  .catch(function (response) {
    utils.writeJson(res, response);
  });
};
