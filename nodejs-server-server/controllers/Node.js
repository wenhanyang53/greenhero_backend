'use strict';

var utils = require('../utils/writer.js');
var Node = require('../service/NodeService');

module.exports.createNode = function createNode (req, res, next) {
  var body = req.swagger.params['body'].value;
  Node.createNode(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteNode = function deleteNode (req, res, next) {
  var _id = req.swagger.params['_id'].value;
  Node.deleteNode(_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.modifyNode = function modifyNode (req, res, next) {
  var body = req.swagger.params['body'].value;
  Node.modifyNode(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
