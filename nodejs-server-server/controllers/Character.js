'use strict';

var utils = require('../utils/writer.js');
var Character = require('../service/CharacterService');

module.exports.createCharacter = function createCharacter (req, res, next) {
  var body = req.swagger.params['body'].value;
  Character.createCharacter(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteCharacterByUserIdAndCharacterName = function deleteCharacterByUserIdAndCharacterName (req, res, next) {
  var user_id = req.swagger.params['user_id'].value;
  var characterName = req.swagger.params['characterName'].value;
  Character.deleteCharacterByUserIdAndCharacterName(user_id,characterName)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getCharacterByUserId = function getCharacterByUserId (req, res, next) {
  var user_id = req.swagger.params['user_id'].value;
  Character.getCharacterByUserId(user_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getCharacterByUserIdAndCharacterName = function getCharacterByUserIdAndCharacterName (req, res, next) {
  var user_id = req.swagger.params['user_id'].value;
  var characterName = req.swagger.params['characterName'].value;
  Character.getCharacterByUserIdAndCharacterName(user_id,characterName)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.modifyCharacter = function modifyCharacter (req, res, next) {
  var body = req.swagger.params['body'].value;
  Character.modifyCharacter(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
