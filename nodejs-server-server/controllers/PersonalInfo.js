'use strict';

var utils = require('../utils/writer.js');
var PersonalInfo = require('../service/PersonalInfoService');

module.exports.createPersonalInfo = function createPersonalInfo (req, res, next) {
  var body = req.swagger.params['body'].value;
  PersonalInfo.createPersonalInfo(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deletePersonalInfoByUserId = function deletePersonalInfoByUserId (req, res, next) {
  var user_id = req.swagger.params['user_id'].value;
  PersonalInfo.deletePersonalInfoByUserId(user_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getPersonalInfoByUserId = function getPersonalInfoByUserId (req, res, next) {
  var user_id = req.swagger.params['user_id'].value;
  PersonalInfo.getPersonalInfoByUserId(user_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.modifyPersonalInfo = function modifyPersonalInfo (req, res, next) {
  var user_id = req.swagger.params['user_id'].value;
  var body = req.swagger.params['body'].value;
  PersonalInfo.modifyPersonalInfo(user_id,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
