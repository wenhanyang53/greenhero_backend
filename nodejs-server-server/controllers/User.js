'use strict';

var utils = require('../utils/writer.js');
var User = require('../service/UserService');

module.exports.createUser = function createUser (req, res, next) {
  var body = req.swagger.params['body'].value;
  User.createUser(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteUserByUserName = function deleteUserByUserName (req, res, next) {
  var userName = req.swagger.params['userName'].value;
  User.deleteUserByUserName(userName)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getUserByUserName = function getUserByUserName (req, res, next) {
  var userName = req.swagger.params['userName'].value;
  User.getUserByUserName(userName)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getUser = function getUser (req, res, next) {
  var userId = req.swagger.params['user_id'].value;
  User.getUser(userId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getUserByCard = function getUserByCard (req, res, next) {
  var userCard = req.swagger.params['userCard'].value;
  User.getUserByCard(userCard)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getActivatedUser = function getActivatedUser (req, res, next) {
  User.getActivatedUser()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.loginUser = function loginUser (req, res, next) {
  var userName = req.swagger.params['userName'].value;
  var userPassword = req.swagger.params['userPassword'].value;
  User.loginUser(userName,userPassword)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.modifyUser = function modifyUser (req, res, next) {
  var userName = req.swagger.params['userName'].value;
  var body = req.swagger.params['body'].value;
  User.modifyUser(userName,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getCoinAmountByUserId = function getCoinAmountByUserId(req,res,next){
  var user_id = req.swagger.params['user_id'].value;
  User.getCoinAmountByUserId(user_id)
  .then(function (response) {
    utils.writeJson(res, response);
  })
  .catch(function (response) {
    utils.writeJson(res, response);
  });
};


module.exports.addCoinsByUserId = function addCoinsByUserId(req,res,next){
  var user_id = req.swagger.params['_id'].value;
  var addCoins = req.swagger.params['addCoins'].value;
  var oldCoins = req.swagger.params['oldCoins'].value;
  User.addCoinsByUserId(user_id,addCoins,oldCoins)
  .then(function (response) {
    utils.writeJson(res, response);
  })
  .catch(function (response) {
    utils.writeJson(res, response);
  });
}

module.exports.substractCoinsByUserId = function substractCoinsByUserId(req,res,next){
  var user_id = req.swagger.params['_id'].value;
  var substractCoins = req.swagger.params['substractCoins'].value;
  var oldCoins = req.swagger.params['oldCoins'].value;
  User.substractCoinsByUserId(user_id,substractCoins,oldCoins)
  .then(function (response) {
    utils.writeJson(res, response);
  })
  .catch(function (response) {
    utils.writeJson(res, response);
  });
}