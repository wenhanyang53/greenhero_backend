'use strict';

var utils = require('../utils/writer.js');
var Application = require('../service/ApplicationService');

module.exports.createApplication = function createApplication (req, res, next) {
  var body = req.swagger.params['body'].value;
  Application.createApplication(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteApplicationByTeamIdAndUserId = function deleteApplicationByTeamIdAndUserId (req, res, next) {
  var team_id = req.swagger.params['team_id'].value;
  var user_id = req.swagger.params['user_id'].value;
  Application.deleteApplicationByTeamIdAndUserId(team_id,user_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAllApplicationsByTeamId = function getAllApplicationsByTeamId (req, res, next) {
  var team_id = req.swagger.params['team_id'].value;
  Application.getAllApplicationsByTeamId(team_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.modifyApplication = function modifyApplication (req, res, next) {
  var body = req.swagger.params['body'].value;
  Application.modifyApplication(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
