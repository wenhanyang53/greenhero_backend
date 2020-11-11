'use strict';

var utils = require('../utils/writer.js');
var Mission = require('../service/MissionService');

module.exports.createMission = function createMission (req, res, next) {
  var body = req.swagger.params['body'].value;
  Mission.createMission(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteMissionById = function deleteMissionById (req, res, next) {
  var _id = req.swagger.params['_id'].value;
  Mission.deleteMissionById(_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAllMissions = function getAllMissions (req, res, next) {
  Mission.getAllMissions()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getMissionByTitleAndType = function getMissionByTitleAndType (req, res, next) {
  var title = req.swagger.params['title'].value;
  var type = req.swagger.params['type'].value;
  Mission.getMissionByTitleAndType(title,type)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getMissionByUserIdAndType = function getMissionByUserIdAndType (req, res, next) {
  var user_id = req.swagger.params['user_id'].value;
  var type = req.swagger.params['type'].value;
  Mission.getMissionByUserIdAndType(user_id,type)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getTopMission = function getTopMission (req, res, next) {
  var date = req.swagger.params['date'].value;
  Mission.getTopMission(date)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getCompletedMissionByType = function getCompletedMissionByType (req, res, next) {
  var date = req.swagger.params['date'].value;
  Mission.getCompletedMissionByType(date)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getNumberofCompletedMission = function getNumberofCompletedMission (req, res, next) {
  var date = req.swagger.params['date'].value;
  Mission.getNumberofCompletedMission(date)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.modifyMission = function modifyMission (req, res, next) {
  var body = req.swagger.params['body'].value;
  Mission.modifyMission(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
