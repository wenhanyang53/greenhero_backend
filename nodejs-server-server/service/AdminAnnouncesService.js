'use strict';


/**
 *
 * body AdminAnnounces To create new admin announce
 * no response value expected for this operation
 **/
exports.createAdminAnnounce = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Delete adminAnnounce
 *
 * _id String The ID of the AdminAnnounces
 * no response value expected for this operation
 **/
exports.deleteAdminAnnounce = function(_id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get Admin Announces
 * See the Admin Announces
 *
 * returns List
 **/
exports.getAllAdminAnnounces = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "icon" : "icon",
  "_id" : "_id",
  "title" : "title",
  "content" : "content"
}, {
  "icon" : "icon",
  "_id" : "_id",
  "title" : "title",
  "content" : "content"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Modify AdminAnnounces
 * To modify a AdminAnnounces
 *
 * body AdminAnnounces modify the AdminAnnounce
 * no response value expected for this operation
 **/
exports.modifyAdminAnnounce = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

