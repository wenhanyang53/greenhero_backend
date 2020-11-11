'use strict';

var utils = require('../utils/writer.js');
var AcState = require('../service/AcStateService');


module.exports.deleteAcStateByTime = function deleteAcStateByTime (req, res, next) {
  var time = req.swagger.params['time'].value;
  AcState.deleteAcStateByTime(time)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAllAcState = function getAllAcState (req, res, next) {
  AcState.getAllAcState()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getLatestAcState = function getLatestAcState (req, res, next) {
  AcState.getLatestAcState()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAcStateByTime = function getAcStateByTime (req, res, next) {
  var time = req.swagger.params['time'].value;
  AcState.getAcStateByTime(time)
  .then(function (response) {
    utils.writeJson(res, response);
  })
  .catch(function (response) {
    utils.writeJson(res, response);
  });
};

module.exports.creatAcStateByTimeAndState = function creatAcStateByTimeAndState (req, res, next) {
  var time = req.swagger.params['time'].value;
  var state = req.swagger.params['state'].value;
  AcState.creatAcStateByTimeAndState(time,state)
  .then(function (response) {
    utils.writeJson(res, response);
  })
  .catch(function (response) {
    utils.writeJson(res, response);
  });
};
