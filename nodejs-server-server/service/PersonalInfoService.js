'use strict';


/**
 * Create a new personal Info
 *
 * body PersonalInfo To create a new personal Info
 * no response value expected for this operation
 **/
exports.createPersonalInfo = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Delete PersonalInfo
 * To delete a user's personal info
 *
 * user_id String The user_id of the personal info that needs to be deleted
 * no response value expected for this operation
 **/
exports.deletePersonalInfoByUserId = function(user_id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Find personal info of user's by user id
 *
 * user_id Integer user id of personal info to return
 * returns PersonalInfo
 **/
exports.getPersonalInfoByUserId = function(user_id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "realName" : "realName",
  "occupation" : "occupation",
  "user_id" : "user_id",
  "phone" : "phone",
  "facebook" : "facebook",
  "_id" : "_id",
  "biography" : "biography",
  "linkedin" : "linkedin",
  "email" : "email"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Modify PersonalInfo
 * To modify a user's PersonalInfo 
 *
 * user_id String The user id of the personal information that needs to be modified
 * body PersonalInfo Updated personal info object
 * no response value expected for this operation
 **/
exports.modifyPersonalInfo = function(user_id,body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

