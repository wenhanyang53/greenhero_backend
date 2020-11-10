'use strict';

var utils = require('../utils/writer.js');
var Boss = require('../service/BossService');

module.exports.createBoss = function createBoss (req, res, next) {
  var body = req.swagger.params['body'].value;
  Boss.createBoss(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteBossByBossName = function deleteBossByBossName (req, res, next) {
  var bossName = req.swagger.params['bossName'].value;
  Boss.deleteBossByBossName(bossName)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAllBoss = function getAllBoss (req, res, next) {
  Boss.getAllBoss()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.modifyBoss = function modifyBoss (req, res, next) {
  var body = req.swagger.params['body'].value;
  Boss.modifyBoss(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
