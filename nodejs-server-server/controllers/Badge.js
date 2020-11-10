'use strict';

var utils = require('../utils/writer.js');
var Badge = require('../service/BadgeService');

module.exports.createBadge = function createBadge (req, res, next) {
  var body = req.swagger.params['body'].value;
  Badge.createBadge(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteBadge = function deleteBadge (req, res, next) {
  var badgeName = req.swagger.params['badgeName'].value;
  Badge.deleteBadge(badgeName)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAllBadge = function getAllBadge (req, res, next) {
  var body = req.swagger.params['body'].value;
  Badge.getAllBadge(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.modifyBadge = function modifyBadge (req, res, next) {
  var badgeName = req.swagger.params['badgeName'].value;
  var body = req.swagger.params['body'].value;
  Badge.modifyBadge(badgeName,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
