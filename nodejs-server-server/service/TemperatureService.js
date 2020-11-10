'use strict';


/**
 *
 * body Temperature To create new Temperature
 * no response value expected for this operation
 **/
exports.createTemperature = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Delete temperature by time
 *
 * time date The time of the temperature
 * no response value expected for this operation
 **/
exports.deleteTemperatureByTime = function(time) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get temperature
 * See the Temperature
 *
 * returns List
 **/
exports.getAllTemperature = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "temperature" : 0.80082819046101150206595775671303272247314453125,
  "_id" : "_id",
  "time" : "2000-01-23"
}, {
  "temperature" : 0.80082819046101150206595775671303272247314453125,
  "_id" : "_id",
  "time" : "2000-01-23"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

