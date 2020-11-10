'use strict';

var utils = require('../utils/writer.js');
var SkillTree = require('../service/SkillTreeService');

module.exports.createSkillTree = function createSkillTree (req, res, next) {
  var body = req.swagger.params['body'].value;
  SkillTree.createSkillTree(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteSkillTreeById = function deleteSkillTreeById (req, res, next) {
  var _id = req.swagger.params['_id'].value;
  SkillTree.deleteSkillTreeById(_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getSkillTreeById = function getSkillTreeById (req, res, next) {
  var _id = req.swagger.params['_id'].value;
  SkillTree.getSkillTreeById(_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.modifySkillTree = function modifySkillTree (req, res, next) {
  var body = req.swagger.params['body'].value;
  SkillTree.modifySkillTree(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
