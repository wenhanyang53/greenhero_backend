'use strict';
var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectID;
var url = "mongodb+srv://admin:admin@cluster0.pilql.mongodb.net/greenhero?retryWrites=true&w=majority";
var User = require('./UserService');
var PersonalInfo = require('./PersonalInfoService');


/**
 * Create new Consumption
 *
 * body Consumption To create new consumption
 * no response value expected for this operation
 **/
exports.createConsumption = function (body) {
  return new Promise(function (resolve, reject) {
    MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
      if (err) throw err;
      var dbo = db.db("greenhero");
      dbo.collection("Consumption").insertOne({
        "user_id": ObjectId(body.user_id),
        "date": new Date(body.date),
        "total": body.total,
        "category": body.category
      }, function (err, result) {
        if (err) throw err;
        resolve(result);
        db.close();
      });
    });
  });
}


/**
 * Delete Consumption by user id,date and category
 * To delete a user's consumption by user id,date and category
 *
 * user_id String The user id of the consumption that needs to be deleted
 * date date date of consumption
 * category String category  of consumption
 * no response value expected for this operation
 **/
exports.deleteConsumptionByUserIdDateAndCategory = function (user_id, date, category) {
  return new Promise(function (resolve, reject) {
    MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
      if (err) throw err;
      var dbo = db.db("greenhero");
      dbo.collection("Consumption").deleteOne({
        "user_id": ObjectId(user_id),
        "date": date,
        "category": category
      }, function (err, result) {
        if (err) throw err;
        resolve(result);
        db.close();
      });
    });
  });
}


/**
 * Delete Consumption
 * To delete a user's consumption of a date
 *
 * user_id String The user id of the consumption that needs to be deleted
 * date date date of consumption
 * no response value expected for this operation
 **/
exports.deleteConsumptionByUserIdandDate = function (user_id, date) {
  return new Promise(function (resolve, reject) {
    MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
      if (err) throw err;
      var dbo = db.db("greenhero");
      dbo.collection("Consumption").deleteOne({
        "user_id": ObjectId(user_id),
        "date": date
      }, function (err, result) {
        if (err) throw err;
        resolve(result);
        db.close();
      });
    });
  });
}


/**
 * Find consumption by user id,date and category
 *
 * user_id String user id of consumption to return
 * date date date of consumption to return
 * category String category  of consumption to return
 * returns Consumption
 **/
exports.getConsumptionByUserIdDateAndCategory = function (user_id, date, category) {
  return new Promise(function (resolve, reject) {
    MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
      if (err) throw err;
      var dbo = db.db("greenhero");
      dbo.collection("Consumption").find({
        "user_id": ObjectId(user_id),
        "date": date,
        "category": category
      }).toArray(function (err, result) {
        if (err) throw err;
        resolve(result);
        db.close();
      });
    });
    var examples = {};
    examples['application/json'] = {
      "date": "2000-01-23",
      "total": 0.80082819046101150206595775671303272247314453125,
      "user_id": "user_id",
      "_id": "_id",
      "category": "category"
    };
  });
}


/**
 * Find consumption by user id and date
 *
 * user_id String user id of consumption to return
 * date date date of consumption to return
 * returns List
 **/
exports.getConsumptionByUserIdandDate = function (user_id, date) {
  return new Promise(function (resolve, reject) {
    MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
      if (err) throw err;
      var dbo = db.db("greenhero");
      dbo.collection("Consumption").find({
        "user_id": ObjectId(user_id),
        "date": date
      }).toArray(function (err, result) {
        if (err) throw err;
        resolve(result);
        db.close();
      });
    });
    var examples = {};
    examples['application/json'] = [{
      "date": "2000-01-23",
      "total": 0.80082819046101150206595775671303272247314453125,
      "user_id": "user_id",
      "_id": "_id",
      "category": "category"
    }, {
      "date": "2000-01-23",
      "total": 0.80082819046101150206595775671303272247314453125,
      "user_id": "user_id",
      "_id": "_id",
      "category": "category"
    }];
  });
}

/**
 * Find consumption by user id and latest date
 *
 * user_id String user id of consumption to return
 * date date date of consumption to return
 * returns List
 **/
exports.getLastConsumptionByUserId = function (user_id) {
  return new Promise(function (resolve, reject) {
    MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
      if (err) throw err;
      var dbo = db.db("greenhero");
      dbo.collection("Consumption").find({
        "user_id": ObjectId(user_id)
      }).sort({"date": -1}).limit(1).toArray(function (err, result) {
        if (err) throw err;
        resolve(result);
        db.close();
      });
    });
    var examples = {};
    examples['application/json'] = [{
      "date": "2000-01-23",
      "total": 0.80082819046101150206595775671303272247314453125,
      "user_id": "user_id",
      "_id": "_id",
      "category": "category"
    }, {
      "date": "2000-01-23",
      "total": 0.80082819046101150206595775671303272247314453125,
      "user_id": "user_id",
      "_id": "_id",
      "category": "category"
    }];
  });
}

/**
 * Find consumption by user id after a date
 *
 * user_id String user id of consumption to return
 * date date date of consumption to return
 * returns List
 **/
exports.getConsumptionForUserAfterDate = function (user_id, date) {
  return new Promise(function (resolve, reject) {
    MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
      if (err) throw err;
      var dbo = db.db("greenhero");
      dbo.collection("Consumption").find({
        "user_id": ObjectId(user_id),
        "date": date
      }).toArray(function (err, result) {
        if (err) throw err;
        resolve(result);
        db.close();
      });
    });
    var examples = {};
    examples['application/json'] = [{
      "date": "2000-01-23",
      "total": 0.80082819046101150206595775671303272247314453125,
      "user_id": "user_id",
      "_id": "_id",
      "category": "category"
    }, {
      "date": "2000-01-23",
      "total": 0.80082819046101150206595775671303272247314453125,
      "user_id": "user_id",
      "_id": "_id",
      "category": "category"
    }];
  });
}

/**
 * Find total consumption between dates
 *
 * min_date date min date of consumption to return
 * max_date date max date of consumption to return
 * returns number
 **/
exports.getAllConsumptionBetween = function (min_date, max_date) {
  return new Promise(function (resolve, reject) {
    MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
      if (err) throw err;
      var dbo = db.db("greenhero");
      dbo.collection("Consumption").find({
        "date": {
          $gte: min_date,
          $lt: max_date
        }
      }).toArray(function (err, result) {
        if (err) throw err;
        let total = 0;
        for(let cons of result) {
          total += cons.total;
        }
        resolve({total: total});
        db.close();
      });
    });
    var examples = {};
    examples['application/json'] = [{
      "date": "2000-01-23",
      "total": 0.80082819046101150206595775671303272247314453125,
      "user_id": "user_id",
      "_id": "_id",
      "category": "category"
    }, {
      "date": "2000-01-23",
      "total": 0.80082819046101150206595775671303272247314453125,
      "user_id": "user_id",
      "_id": "_id",
      "category": "category"
    }];
  });
}

/**
 * Find total consumption between dates
 *
 * date date date of allowance
 * user_id string id of the user to search allowane
 * returns number
 **/
exports.getUserMonthAllowance = function (date, user_id) {
  return new Promise(async function (resolve, reject) {
    const user = await User.getUser(user_id);
    let allowance = 0;
    if(user && user.consumption && user.consumption[date.getFullYear()+'_'+date.getMonth()]) {
      allowance = user.consumption[date.getFullYear()+'_'+date.getMonth()];
    }
    resolve({total: allowance});
    var examples = {};
    examples['application/json'] = [{
      "date": "2000-01-23",
      "total": 0.80082819046101150206595775671303272247314453125,
      "user_id": "user_id",
      "_id": "_id",
      "category": "category"
    }, {
      "date": "2000-01-23",
      "total": 0.80082819046101150206595775671303272247314453125,
      "user_id": "user_id",
      "_id": "_id",
      "category": "category"
    }];
  });
}

/**
 * Find total consumption allowance between dates
 *
 * returns number
 **/
exports.getTotalMonthAllowance = function (date) {
  return new Promise(async function (resolve, reject) {
    const users = await User.getAllUsers();
    let allowance = 0;
    for(let user of users) {
      if(user && user.consumption && user.consumption[date.getFullYear()+'_'+date.getMonth()]) {
        allowance += user.consumption[date.getFullYear()+'_'+date.getMonth()];
      }
    }
    resolve({total: allowance});
    var examples = {};
    examples['application/json'] = [{
      "date": "2000-01-23",
      "total": 0.80082819046101150206595775671303272247314453125,
      "user_id": "user_id",
      "_id": "_id",
      "category": "category"
    }, {
      "date": "2000-01-23",
      "total": 0.80082819046101150206595775671303272247314453125,
      "user_id": "user_id",
      "_id": "_id",
      "category": "category"
    }];
  });
}

/**
 * Find total consumption allowance between dates
 *
 * returns number
 **/
exports.getTotalWeekAllowance = function (date) {
  return new Promise(async function (resolve, reject) {
    const users = await User.getAllUsers();
    let allowance = 0;
    for(let user of users) {
      if(user && user.consumption && user.consumption[date.getFullYear()+'_'+date.getMonth()]) {
        allowance += user.consumption[date.getFullYear()+'_'+date.getMonth()];
      }
    }
    resolve({total: (allowance / 4)});
    var examples = {};
    examples['application/json'] = [{
      "date": "2000-01-23",
      "total": 0.80082819046101150206595775671303272247314453125,
      "user_id": "user_id",
      "_id": "_id",
      "category": "category"
    }, {
      "date": "2000-01-23",
      "total": 0.80082819046101150206595775671303272247314453125,
      "user_id": "user_id",
      "_id": "_id",
      "category": "category"
    }];
  });
}

/**
 * Find total consumption between dates for a category
 *
 * min_date date min date of consumption to return
 * max_date date max date of consumption to return
 * category string category of the consumption
 * returns number
 **/
exports.getAllConsumptionBetweenForCategory = function (min_date, max_date, category) {
  return new Promise(function (resolve, reject) {
    MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
      if (err) throw err;
      var dbo = db.db("greenhero");
      dbo.collection("Consumption").find({
        "date": {
          $gte: min_date,
          $lt: max_date
        },
        "category": category
      }).toArray(function (err, result) {
        if (err) throw err;
        let total = 0;
        for(let cons of result) {
          total += cons.total;
        }
        resolve({total: total});
        db.close();
      });
    });
    var examples = {};
    examples['application/json'] = [{
      "date": "2000-01-23",
      "total": 0.80082819046101150206595775671303272247314453125,
      "user_id": "user_id",
      "_id": "_id",
      "category": "category"
    }, {
      "date": "2000-01-23",
      "total": 0.80082819046101150206595775671303272247314453125,
      "user_id": "user_id",
      "_id": "_id",
      "category": "category"
    }];
  });
}

/**
 * Find total consumption between dates for a category and a user
 *
 * min_date date min date of consumption to return
 * max_date date max date of consumption to return
 * category string category of the consumption
 * user_id string user id of the consumption
 * returns number
 **/
exports.getAllConsumptionBetweenForCategoryAndUser = function (min_date, max_date, category, user_id) {
  return new Promise(function (resolve, reject) {
    MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
      if (err) throw err;
      var dbo = db.db("greenhero");
      dbo.collection("Consumption").find({
        "date": {
          $gte: min_date,
          $lt: max_date
        },
        "category": category,
        "user_id": new ObjectId(user_id)
      }).toArray(function (err, result) {
        if (err) throw err;
        let total = 0;
        for(let cons of result) {
          total += cons.total;
        }
        resolve({total: total});
        db.close();
      });
    });
    var examples = {};
    examples['application/json'] = [{
      "date": "2000-01-23",
      "total": 0.80082819046101150206595775671303272247314453125,
      "user_id": "user_id",
      "_id": "_id",
      "category": "category"
    }, {
      "date": "2000-01-23",
      "total": 0.80082819046101150206595775671303272247314453125,
      "user_id": "user_id",
      "_id": "_id",
      "category": "category"
    }];
  });
}

/**
 * Find total consumption between dates for a user
 *
 * min_date date min date of consumption to return
 * max_date date max date of consumption to return
 * user_id string user id of the consumption
 * returns number
 **/
exports.getAllConsumptionBetweenForUser = function (min_date, max_date, user_id) {
  return new Promise(function (resolve, reject) {
    MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
      if (err) throw err;
      var dbo = db.db("greenhero");
      dbo.collection("Consumption").find({
        "date": {
          $gte: min_date,
          $lt: max_date
        },
        "user_id": new ObjectId(user_id)
      }).toArray(function (err, result) {
        if (err) throw err;
        let total = 0;
        for(let cons of result) {
          total += cons.total;
        }
        resolve({total: total});
        db.close();
      });
    });
    var examples = {};
    examples['application/json'] = [{
      "date": "2000-01-23",
      "total": 0.80082819046101150206595775671303272247314453125,
      "user_id": "user_id",
      "_id": "_id",
      "category": "category"
    }, {
      "date": "2000-01-23",
      "total": 0.80082819046101150206595775671303272247314453125,
      "user_id": "user_id",
      "_id": "_id",
      "category": "category"
    }];
  });
}

/**
 * Find total consumption between dates for a user
 *
 * min_date date min date of consumption to return
 * max_date date max date of consumption to return
 * user_id string user id of the consumption
 * returns number
 **/
exports.getAllConsumptionBetweenUser = function (min_date, max_date, user_id) {
  return new Promise(function (resolve, reject) {
    MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
      if (err) throw err;
      var dbo = db.db("greenhero");
      dbo.collection("Consumption").find({
        "date": {
          $gte: min_date,
          $lt: max_date
        },
        "user_id": new ObjectId(user_id)
      }).toArray(function (err, result) {
        if (err) throw err;
        let total = 0;
        for(let cons of result) {
          total += cons.total;
        }
        resolve({total: total});
        db.close();
      });
    });
    var examples = {};
    examples['application/json'] = [{
      "date": "2000-01-23",
      "total": 0.80082819046101150206595775671303272247314453125,
      "user_id": "user_id",
      "_id": "_id",
      "category": "category"
    }, {
      "date": "2000-01-23",
      "total": 0.80082819046101150206595775671303272247314453125,
      "user_id": "user_id",
      "_id": "_id",
      "category": "category"
    }];
  });
}

/**
 * Find highest consumption category between dates for a user
 *
 * min_date date min date of consumption to return
 * max_date date max date of consumption to return
 * user_id string user id of the consumption
 * returns string
 **/
exports.getConsumptionHighestCategoryForUser = function (min_date, max_date, user_id) {
  return new Promise(function (resolve, reject) {
    MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
      if (err) throw err;
      var dbo = db.db("greenhero");
      dbo.collection("Consumption").find({
        "date": {
          $gte: min_date,
          $lt: max_date
        },
        "user_id": new ObjectId(user_id)
      }).toArray(function (err, result) {
        if (err) throw err;
        let total = {};
        for(let cons of result) {
          if(Object.keys(total).some((key) => key === cons.category)) {
            total[cons.category] += cons.total;
          } else {
            total[cons.category] = cons.total;
          }
        }
        var highestTotal = 0;
        var highestCategory;
        for(let key of Object.keys(total)) {
          if(total[key] > highestTotal) {
            highestTotal = total[key];
            highestCategory = key;
          }
        }
        resolve({category: highestCategory});
        db.close();
      });
    });
    var examples = {};
    examples['application/json'] = [{
      "date": "2000-01-23",
      "total": 0.80082819046101150206595775671303272247314453125,
      "user_id": "user_id",
      "_id": "_id",
      "category": "category"
    }, {
      "date": "2000-01-23",
      "total": 0.80082819046101150206595775671303272247314453125,
      "user_id": "user_id",
      "_id": "_id",
      "category": "category"
    }];
  });
}

/**
 * Find highest consumption day between dates for a user
 *
 * min_date date min date of consumption to return
 * max_date date max date of consumption to return
 * user_id string user id of the consumption
 * returns string
 **/
exports.getConsumptionHighestDayForUser = function (min_date, max_date, user_id) {
  return new Promise(function (resolve, reject) {
    MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
      if (err) throw err;
      var dbo = db.db("greenhero");
      dbo.collection("Consumption").find({
        "date": {
          $gte: min_date,
          $lt: max_date
        },
        "user_id": new ObjectId(user_id)
      }).toArray(function (err, result) {
        if (err) throw err;
        let total = {};
        for(let cons of result) {
          if(Object.keys(total).some((key) => key === cons.date.getDay())) {
            total[cons.date.getDay()] += cons.total;
          } else {
            total[cons.date.getDay()] = cons.total;
          }
        }
        var highestTotal = 0;
        var highestDay;
        for(let key of Object.keys(total)) {
          if(total[key] > highestTotal) {
            highestTotal = total[key];
            highestDay = key;
          }
        }
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        resolve({day: days[highestDay]});
        db.close();
      });
    });
    var examples = {};
    examples['application/json'] = [{
      "date": "2000-01-23",
      "total": 0.80082819046101150206595775671303272247314453125,
      "user_id": "user_id",
      "_id": "_id",
      "category": "category"
    }, {
      "date": "2000-01-23",
      "total": 0.80082819046101150206595775671303272247314453125,
      "user_id": "user_id",
      "_id": "_id",
      "category": "category"
    }];
  });
}

/**
 * Find average consumption between dates for a user's profession
 *
 * min_date date min date of consumption to return
 * max_date date max date of consumption to return
 * user_id string user id of the consumption
 * returns number
 **/
exports.getAverageConsumptionBetweenUserProfession = function (min_date, max_date, user_id) {
  return new Promise(function (resolve, reject) {
    MongoClient.connect(url, { useNewUrlParser: true }, async function (err, db) {
      if (err) throw err;
      var dbo = db.db("greenhero");
      const user = await User.getUser(user_id);
      const users = await PersonalInfo.getPersonalInfoByProfession(user.personalInfo.occupation);
      let finalTotal = 0;
      for(let us of users) {
        finalTotal += await new Promise(function (mini_resolve, mini_reject) {
          dbo.collection("Consumption").find({
            "date": {
              $gte: min_date,
              $lt: max_date
            },
            "user_id": new ObjectId(us.user_id)
          }).toArray(function (err, result) {
            if (err) throw err;
            let total = 0;
            for(let cons of result) {
              total += cons.total;
            }
            mini_resolve(total);
            db.close();
          });
        });
      }
      if(users.length) {
        finalTotal = finalTotal / users.length;
      }
      resolve({total: finalTotal});
    });
    var examples = {};
    examples['application/json'] = [{
      "date": "2000-01-23",
      "total": 0.80082819046101150206595775671303272247314453125,
      "user_id": "user_id",
      "_id": "_id",
      "category": "category"
    }, {
      "date": "2000-01-23",
      "total": 0.80082819046101150206595775671303272247314453125,
      "user_id": "user_id",
      "_id": "_id",
      "category": "category"
    }];
  });
}

/**
 * Find average consumption between dates for a profession
 *
 * min_date date min date of consumption to return
 * max_date date max date of consumption to return
 * occupation string the occupation to filter by
 * returns number
 **/
exports.getConsumptionBetweenProfession = function (min_date, max_date, occupation) {
  return new Promise(function (resolve, reject) {
    MongoClient.connect(url, { useNewUrlParser: true }, async function (err, db) {
      if (err) throw err;
      var dbo = db.db("greenhero");
      const users = await PersonalInfo.getPersonalInfoByProfession(occupation);
      let finalTotal = 0;
      for(let us of users) {
        finalTotal += await new Promise(function (mini_resolve, mini_reject) {
          dbo.collection("Consumption").find({
            "date": {
              $gte: min_date,
              $lt: max_date
            },
            "user_id": new ObjectId(us.user_id)
          }).toArray(function (err, result) {
            if (err) throw err;
            let total = 0;
            for(let cons of result) {
              total += cons.total;
            }
            mini_resolve(total);
            db.close();
          });
        });
      }
      resolve({total: finalTotal});
    });
    var examples = {};
    examples['application/json'] = [{
      "date": "2000-01-23",
      "total": 0.80082819046101150206595775671303272247314453125,
      "user_id": "user_id",
      "_id": "_id",
      "category": "category"
    }, {
      "date": "2000-01-23",
      "total": 0.80082819046101150206595775671303272247314453125,
      "user_id": "user_id",
      "_id": "_id",
      "category": "category"
    }];
  });
}


/**
 * Modify Consumption
 * To modify a Consumption
 *
 * body Consumption modify the Consumption
 * no response value expected for this operation
 **/
exports.modifyConsumption = function (body) {
  return new Promise(function (resolve, reject) {
    MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
      if (err) throw err;
      var dbo = db.db("greenhero");
      dbo.collection("Consumption").updateOne({
        "_id": ObjectId(body._id),
      },
        {
          "user_id": ObjectId(body.user_id),
          "date": body.date,
          "total": body.total,
          "category": body.category
        }, function (err, result) {
          if (err) throw err;
          resolve(result);
          db.close();
        });
    });
  });
}

