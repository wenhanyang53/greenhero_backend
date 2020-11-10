'use strict';

var utils = require('../utils/writer.js');
var Consumption = require('../service/ConsumptionService');

module.exports.createConsumption = function createConsumption (req, res, next) {
  var body = req.swagger.params['body'].value;
  Consumption.createConsumption(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteConsumptionByUserIdDateAndCategory = function deleteConsumptionByUserIdDateAndCategory (req, res, next) {
  var user_id = req.swagger.params['user_id'].value;
  var date = req.swagger.params['date'].value;
  var category = req.swagger.params['category'].value;
  Consumption.deleteConsumptionByUserIdDateAndCategory(user_id,date,category)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteConsumptionByUserIdandDate = function deleteConsumptionByUserIdandDate (req, res, next) {
  var user_id = req.swagger.params['user_id'].value;
  var date = req.swagger.params['date'].value;
  Consumption.deleteConsumptionByUserIdandDate(user_id,date)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getConsumptionByUserIdDateAndCategory = function getConsumptionByUserIdDateAndCategory (req, res, next) {
  var user_id = req.swagger.params['user_id'].value;
  var date = req.swagger.params['date'].value;
  var category = req.swagger.params['category'].value;
  Consumption.getConsumptionByUserIdDateAndCategory(user_id,date,category)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getConsumptionByUserIdandDate = function getConsumptionByUserIdandDate (req, res, next) {
  var user_id = req.swagger.params['user_id'].value;
  var date = req.swagger.params['date'].value;
  Consumption.getConsumptionByUserIdandDate(user_id,date)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getConsumptionForUserAfterDate = function getConsumptionForUserAfterDate (req, res, next) {
  var user_id = req.swagger.params['user_id'].value;
  var date = req.swagger.params['date'].value;
  Consumption.getConsumptionForUserAfterDate(user_id,date)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.modifyConsumption = function modifyConsumption (req, res, next) {
  var body = req.swagger.params['body'].value;
  Consumption.modifyConsumption(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
