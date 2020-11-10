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

module.exports.getAllConsumptionBetween = function getAllConsumptionBetween (req, res, next) {
  var min_date = new Date(req.swagger.params['min_date'].value);
  var max_date = new Date(req.swagger.params['max_date'].value);
  Consumption.getAllConsumptionBetween(min_date,max_date)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAllConsumptionBetweenForCategory = function getAllConsumptionBetweenForCategory (req, res, next) {
  var min_date = new Date(req.swagger.params['min_date'].value);
  var max_date = new Date(req.swagger.params['max_date'].value);
  var category = req.swagger.params['category'].value;
  Consumption.getAllConsumptionBetweenForCategory(min_date,max_date,category)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAllConsumptionBetweenUser = function getAllConsumptionBetweenUser (req, res, next) {
  var min_date = new Date(req.swagger.params['min_date'].value);
  var max_date = new Date(req.swagger.params['max_date'].value);
  var user_id = req.swagger.params['user_id'].value;
  Consumption.getAllConsumptionBetweenUser(min_date,max_date,user_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAverageConsumptionBetweenUserProfession = function getAverageConsumptionBetweenUserProfession (req, res, next) {
  var min_date = new Date(req.swagger.params['min_date'].value);
  var max_date = new Date(req.swagger.params['max_date'].value);
  var user_id = req.swagger.params['user_id'].value;
  Consumption.getAverageConsumptionBetweenUserProfession(min_date,max_date,user_id)
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
