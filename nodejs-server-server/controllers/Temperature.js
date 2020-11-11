'use strict';

var utils = require('../utils/writer.js');
var Temperature = require('../service/TemperatureService');

module.exports.createTemperature = function createTemperature (req, res, next) {
  var body = req.swagger.params['body'].value;
  Temperature.createTemperature(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteTemperatureByTime = function deleteTemperatureByTime (req, res, next) {
  var time = req.swagger.params['time'].value;
  Temperature.deleteTemperatureByTime(time)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAllTemperature = function getAllTemperature (req, res, next) {
  Temperature.getAllTemperature()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getLatestTemperature = function getLatestTemperature (req, res, next) {
  Temperature.getLatestTemperature()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getTemperatureByTime = function getTemperatureByTime (req, res, next) {
  var time = req.swagger.params['time'].value;
  Temperature.getTemperatureByTime(time)
  .then(function (response) {
    utils.writeJson(res, response);
  })
  .catch(function (response) {
    utils.writeJson(res, response);
  });
};

module.exports.creatTemperatureByTimeAndTemperature = function creatTemperatureByTimeAndTemperature (req, res, next) {
  var time = req.swagger.params['time'].value;
  var temperature = req.swagger.params['temperature'].value;
  Temperature.creatTemperatureByTimeAndTemperature(time,temperature)
  .then(function (response) {
    utils.writeJson(res, response);
  })
  .catch(function (response) {
    utils.writeJson(res, response);
  });
};
