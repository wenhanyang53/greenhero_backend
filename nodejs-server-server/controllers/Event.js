'use strict';

var utils = require('../utils/writer.js');
var Event = require('../service/EventService');

module.exports.getTopEvents = function getTopEvents (req, res, next) {
  var date = req.swagger.params['date'].value;
  Event.getTopEvents(date)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};


module.exports.getAllEvents = function getAllEvents (req, res, next) {
  Event.getAllEvents()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getEventById = function getEventById (req, res, next) {
  var id = req.swagger.params['id'].value;
  Event.getEventById(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.createEvent = function createEvent (req, res, next) {
  var body = req.swagger.params['body'].value;
  Event.createEvent(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteEventByEventName = function deleteEventByEventName (req, res, next) {
  var eventName = req.swagger.params['EventName'].value;
  Event.deleteEventByEventName(eventName)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getEventByEventName = function getEventByEventName (req, res, next) {
  var eventName = req.swagger.params['EventName'].value;
  Event.getEventByEventName(eventName)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.modifyEvent = function modifyEvent (req, res, next) {
  var eventName = req.swagger.params['EventName'].value;
  var body = req.swagger.params['body'].value;
  Event.modifyEvent(eventName,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
