'use strict';


/**
 * Create a new boss
 *
 * body Boss To create a new boss
 * no response value expected for this operation
 **/
exports.createBoss = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Delete boss
 * To delete a boss
 *
 * bossName String The name of the boss that needs to be deleted
 * no response value expected for this operation
 **/
exports.deleteBossByBossName = function(bossName) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get bosses
 * See the available bosses
 *
 * returns List
 **/
exports.getAllBoss = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "armor" : 6.02745618307040320615897144307382404804229736328125,
  "bossName" : "bossName",
  "attack" : 1.46581298050294517310021547018550336360931396484375,
  "health" : 0.80082819046101150206595775671303272247314453125,
  "_id" : "_id",
  "avatar" : "avatar",
  "bossDescription" : "bossDescription",
  "healing_factor" : 5.962133916683182377482808078639209270477294921875
}, {
  "armor" : 6.02745618307040320615897144307382404804229736328125,
  "bossName" : "bossName",
  "attack" : 1.46581298050294517310021547018550336360931396484375,
  "health" : 0.80082819046101150206595775671303272247314453125,
  "_id" : "_id",
  "avatar" : "avatar",
  "bossDescription" : "bossDescription",
  "healing_factor" : 5.962133916683182377482808078639209270477294921875
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Modify boss
 * To modify a boss 
 *
 * body Boss Updated boss object
 * no response value expected for this operation
 **/
exports.modifyBoss = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

