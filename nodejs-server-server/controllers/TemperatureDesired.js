'use strict';

var utils = require('../utils/writer.js');
var TemperatureDesired = require('../service/TemperatureDesiredService');

module.exports.createTemperatureDesired = function createTemperatureDesired (req, res, next) {
  var body = req.swagger.params['body'].value;
  TemperatureDesired.createTemperatureDesired(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteTemperatureDesiredByTime = function deleteTemperatureDesiredByTime (req, res, next) {
  var time = req.swagger.params['time'].value;
  TemperatureDesired.deleteTemperatureDesiredByTime(time)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAllTemperatureDesired = function getAllTemperatureDesired (req, res, next) {
  TemperatureDesired.getAllTemperatureDesired()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getLatestTemperatureDesired = function getLatestTemperatureDesired (req, res, next) {
  TemperatureDesired.getLatestTemperatureDesired()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getTemperatureDesiredByTime = function getTemperatureDesiredByTime (req, res, next) {
  var time = req.swagger.params['time'].value;
  TemperatureDesired.getTemperatureDesiredByTime(time)
  .then(function (response) {
    utils.writeJson(res, response);
  })
  .catch(function (response) {
    utils.writeJson(res, response);
  });
};

module.exports.creatTemperatureDesiredByTimeAndTemperature = function creatTemperatureDesiredByTimeAndTemperature (req, res, next) {
  var time = req.swagger.params['time'].value;
  var temperature = req.swagger.params['temperature'].value;
  TemperatureDesired.creatTemperatureDesiredByTimeAndTemperature(time,temperature)
  .then(function (response) {
    utils.writeJson(res, response);
  })
  .catch(function (response) {
    utils.writeJson(res, response);
  });
};
