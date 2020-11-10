'use strict';

var utils = require('../utils/writer.js');
var AdminAnnounces = require('../service/AdminAnnouncesService');

module.exports.createAdminAnnounce = function createAdminAnnounce (req, res, next) {
  var body = req.swagger.params['body'].value;
  AdminAnnounces.createAdminAnnounce(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteAdminAnnounce = function deleteAdminAnnounce (req, res, next) {
  var _id = req.swagger.params['_id'].value;
  AdminAnnounces.deleteAdminAnnounce(_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAllAdminAnnounces = function getAllAdminAnnounces (req, res, next) {
  AdminAnnounces.getAllAdminAnnounces()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.modifyAdminAnnounce = function modifyAdminAnnounce (req, res, next) {
  var body = req.swagger.params['body'].value;
  AdminAnnounces.modifyAdminAnnounce(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
