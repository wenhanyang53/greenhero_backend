'use strict';
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://admin:admin@cluster0.pilql.mongodb.net/greenhero?retryWrites=true&w=majority";
var ObjectId = require('mongodb').ObjectId;
var SkillTree = require('../service/SkillTreeService');
var User = require('../service/UserService');
var STUtils = require('../utils/skillTreeCalculations');

/**
 * Create a new character
 *
 * body Character To create a new character
 * no response value expected for this operation
 **/
exports.createCharacter = function (body) {
  return new Promise(function (resolve, reject) {
    MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
      if (err) throw err;
      var dbo = db.db("greenhero");
      var myobj = {
        "attack": body.attack,
        "armor": body.armor,
        "health": body.health,
        "avatar": body.avatar,
        "healing_factor": body.healing_factor,
        "user_id": ObjectId(body.user_id),
        "skillTree": ObjectId(body.skillTree),
        "characterName": body.characterName,
        "characterDescription": body.characterDescription
      };
      dbo.collection("Character").insertOne(myobj, function (err, res) {
        if (err) throw err;
        console.log("successful");
        resolve(res);
        db.close();
      });
    });
  });
}


/**
 * Delete character
 * To delete a character
 *
 * user_id String The user_id of the character that needs to be deleted
 * characterName String The characterName of the character that needs to be deleted
 * no response value expected for this operation
 **/
exports.deleteCharacterByUserIdAndCharacterName = function (user_id, characterName) {
  return new Promise(function (resolve, reject) {
    MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
      if (err) throw err;
      var dbo = db.db("greenhero");
      var whereStr = { "user_id": ObjectId(user_id), "characterName": characterName };  // condition
      dbo.collection("Character").deleteOne(whereStr, function (err, obj) {
        if (err) throw err;
        console.log("successful");
        resolve();
        db.close();
      });
    });
  });
}


/**
 * Get characters
 * See the available character
 *
 * user_id String The user_id of the character.
 * returns List
 **/
exports.getCharacterByUserId = function (user_id) {
  return new Promise(function (resolve, reject) {
    MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
      if (err) throw err;
      var dbo = db.db("greenhero");
      var whereStr = { "user_id": ObjectId(user_id) };  // condition
      dbo.collection("Character").find(whereStr).toArray(async function (err, result) {
        if (err) throw err;
        for (let char of result) {
          if (char.skillTree) {
            char.skillTree = await SkillTree.getSkillTreeById(char.skillTree);
          }
          if(char.skillTree && char.skillTree.nodes) {
            let healthFlatBonus = 0, healthPercentageBonus = 0;
            let armorFlatBonus = 0, armorPercentageBonus = 0;
            let attackFlatBonus = 0, attackPercentageBonus = 0;
            let healing_factorFlatBonus = 0, healing_factorPercentageBonus = 0;
            
            for(let node of char.skillTree.nodes) {
              healthFlatBonus += STUtils.calculateBonusStatFlat('Health', node, 0);
              healthPercentageBonus += STUtils.calculateBonusStatPercentage('Health', node, 0);

              armorFlatBonus += STUtils.calculateBonusStatFlat('Armor', node, 0);
              armorPercentageBonus += STUtils.calculateBonusStatPercentage('Armor', node, 0);

              attackFlatBonus += STUtils.calculateBonusStatFlat('Attack', node, 0);
              attackPercentageBonus += STUtils.calculateBonusStatPercentage('Attack', node, 0);

              healing_factorFlatBonus += STUtils.calculateBonusStatFlat('Healing_Factor', node, 0);
              healing_factorPercentageBonus += STUtils.calculateBonusStatPercentage('Healing_Factor', node, 0);
            }

            const totalFlatHealth = char.health + healthFlatBonus;
            char.health = totalFlatHealth + (totalFlatHealth * healthPercentageBonus);
            
            const totalFlatArmor = char.armor + armorFlatBonus;
            char.armor = totalFlatArmor + (totalFlatArmor * armorPercentageBonus);
            
            const totalFlatAttack = char.attack + attackFlatBonus;
            char.attack = totalFlatAttack + (totalFlatAttack * attackPercentageBonus);
            
            const totalFlatHealing_factor = char.healing_factor + healing_factorFlatBonus;
            char.healing_factor = totalFlatHealing_factor + (totalFlatHealing_factor * healing_factorPercentageBonus);
            
          }
        }
        resolve(result);
        db.close();
      });
    });
    var examples = {};
    examples['application/json'] = [{
      "skillTree": "skillTree",
      "armor": 6.02745618307040320615897144307382404804229736328125,
      "user_id": "user_id",
      "attack": 0.80082819046101150206595775671303272247314453125,
      "characterDescription": "characterDescription",
      "characterName": "characterName",
      "health": 1.46581298050294517310021547018550336360931396484375,
      "_id": "_id",
      "avatar": "avatar",
      "healing_factor": 5.962133916683182377482808078639209270477294921875
    }, {
      "skillTree": "skillTree",
      "armor": 6.02745618307040320615897144307382404804229736328125,
      "user_id": "user_id",
      "attack": 0.80082819046101150206595775671303272247314453125,
      "characterDescription": "characterDescription",
      "characterName": "characterName",
      "health": 1.46581298050294517310021547018550336360931396484375,
      "_id": "_id",
      "avatar": "avatar",
      "healing_factor": 5.962133916683182377482808078639209270477294921875
    }];
  });
}

/**
 * Get characters
 * See the available character
 *
 * user_id String The user_id of the character.
 * returns List
 **/
exports.getCharacterById = function (_id) {
  return new Promise(function (resolve, reject) {
    MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
      if (err) throw err;
      var dbo = db.db("greenhero");
      var whereStr = { "_id": ObjectId(_id) };  // condition
      dbo.collection("Character").findOne(whereStr).then(async function (result) {
          if (result.skillTree) {
            result.skillTree = await SkillTree.getSkillTreeById(result.skillTree);
          }
          if(result.skillTree && result.skillTree.nodes) {
            let healthFlatBonus = 0, healthPercentageBonus = 0;
            let armorFlatBonus = 0, armorPercentageBonus = 0;
            let attackFlatBonus = 0, attackPercentageBonus = 0;
            let healing_factorFlatBonus = 0, healing_factorPercentageBonus = 0;

            for(let node of result.skillTree.nodes) {
              healthFlatBonus += STUtils.calculateBonusStatFlat('Health', node, 0);
              healthPercentageBonus += STUtils.calculateBonusStatPercentage('Health', node, 0);

              armorFlatBonus += STUtils.calculateBonusStatFlat('Armor', node, 0);
              armorPercentageBonus += STUtils.calculateBonusStatPercentage('Armor', node, 0);

              attackFlatBonus += STUtils.calculateBonusStatFlat('Attack', node, 0);
              attackPercentageBonus += STUtils.calculateBonusStatPercentage('Attack', node, 0);

              healing_factorFlatBonus += STUtils.calculateBonusStatFlat('Healing_Factor', node, 0);
              healing_factorPercentageBonus += STUtils.calculateBonusStatPercentage('Healing_Factor', node, 0);
            }

            const totalFlatHealth = result.health + healthFlatBonus;
            result.health = totalFlatHealth + (totalFlatHealth * healthPercentageBonus);

            const totalFlatArmor = result.armor + armorFlatBonus;
            result.armor = totalFlatArmor + (totalFlatArmor * armorPercentageBonus);
            
            const totalFlatAttack = result.attack + attackFlatBonus;
            result.attack = totalFlatAttack + (totalFlatAttack * attackPercentageBonus);
            
            const totalFlatHealing_factor = result.healing_factor + healing_factorFlatBonus;
            result.healing_factor = totalFlatHealing_factor + (totalFlatHealing_factor * healing_factorPercentageBonus);
            
          }
        resolve(result);
        db.close();
      });
    });
    var examples = {};
    examples['application/json'] = [{
      "skillTree": "skillTree",
      "armor": 6.02745618307040320615897144307382404804229736328125,
      "user_id": "user_id",
      "attack": 0.80082819046101150206595775671303272247314453125,
      "characterDescription": "characterDescription",
      "characterName": "characterName",
      "health": 1.46581298050294517310021547018550336360931396484375,
      "_id": "_id",
      "avatar": "avatar",
      "healing_factor": 5.962133916683182377482808078639209270477294921875
    }, {
      "skillTree": "skillTree",
      "armor": 6.02745618307040320615897144307382404804229736328125,
      "user_id": "user_id",
      "attack": 0.80082819046101150206595775671303272247314453125,
      "characterDescription": "characterDescription",
      "characterName": "characterName",
      "health": 1.46581298050294517310021547018550336360931396484375,
      "_id": "_id",
      "avatar": "avatar",
      "healing_factor": 5.962133916683182377482808078639209270477294921875
    }];
  });
}


/**
 * Get character
 * See the available character
 *
 * user_id String The user_id of the character.
 * characterName String The characterName of the character.
 * returns Character
 **/
exports.getCharacterByUserIdAndCharacterName = function (user_id, characterName) {
  return new Promise(function (resolve, reject) {
    MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
      if (err) throw err;
      var dbo = db.db("greenhero");
      dbo.collection("Character").findOne({ "user_id": ObjectId(user_id), "characterName": characterName }).then(async function (result) {
        if (err) throw err;
        if (result.skillTree) {
          result.skillTree = await SkillTree.getSkillTreeById(result.skillTree);
        }
        if(result.skillTree && result.skillTree.nodes) {
          let healthFlatBonus = 0, healthPercentageBonus = 0;
          let armorFlatBonus = 0, armorPercentageBonus = 0;
          let attackFlatBonus = 0, attackPercentageBonus = 0;
          let healing_factorFlatBonus = 0, healing_factorPercentageBonus = 0;

          for(let node of result.skillTree.nodes) {
            healthFlatBonus += STUtils.calculateBonusStatFlat('Health', node, 0);
            healthPercentageBonus += STUtils.calculateBonusStatPercentage('Health', node, 0);

            armorFlatBonus += STUtils.calculateBonusStatFlat('Armor', node, 0);
            armorPercentageBonus += STUtils.calculateBonusStatPercentage('Armor', node, 0);

            attackFlatBonus += STUtils.calculateBonusStatFlat('Attack', node, 0);
            attackPercentageBonus += STUtils.calculateBonusStatPercentage('Attack', node, 0);

            healing_factorFlatBonus += STUtils.calculateBonusStatFlat('Healing_Factor', node, 0);
            healing_factorPercentageBonus += STUtils.calculateBonusStatPercentage('Healing_Factor', node, 0);
          }

          const totalFlatHealth = result.health + healthFlatBonus;
          result.health = totalFlatHealth + (totalFlatHealth * healthPercentageBonus);

          const totalFlatArmor = result.armor + armorFlatBonus;
          result.armor = totalFlatArmor + (totalFlatArmor * armorPercentageBonus);
          
          const totalFlatAttack = result.attack + attackFlatBonus;
          result.attack = totalFlatAttack + (totalFlatAttack * attackPercentageBonus);
          
          const totalFlatHealing_factor = result.healing_factor + healing_factorFlatBonus;
          result.healing_factor = totalFlatHealing_factor + (totalFlatHealing_factor * healing_factorPercentageBonus);
          
        }
        resolve(result);
        db.close();
      });
    });
    var examples = {};
    examples['application/json'] = {
      "skillTree": "skillTree",
      "armor": 6.02745618307040320615897144307382404804229736328125,
      "user_id": "user_id",
      "attack": 0.80082819046101150206595775671303272247314453125,
      "characterDescription": "characterDescription",
      "characterName": "characterName",
      "health": 1.46581298050294517310021547018550336360931396484375,
      "_id": "_id",
      "avatar": "avatar",
      "healing_factor": 5.962133916683182377482808078639209270477294921875
    };
  });
}


/**
 * Modify character
 * To modify a character 
 *
 * body Character To create a new character
 * no response value expected for this operation
 **/
exports.modifyCharacter = function (body) {
  return new Promise(function (resolve, reject) {
    MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
      if (err) throw err;
      var dbo = db.db("greenhero");
      var whereStr = { "_id": ObjectId(body._id) };  // condition
      var updateStr = {
        $set: {
          "attack": body.attack,
          "armor": body.armor,
          "health": body.health,
          "avatar": body.avatar,
          "healing_factor": body.healing_factor,
          "user_id": ObjectId(body.user_id),
          "skillTree": ObjectId(body.skillTree),
          "characterName": body.characterName,
          "characterDescription": body.characterDescription
        }
      };
      dbo.collection("Character").updateOne(whereStr, updateStr, function (err, res) {
        if (err) throw err;
        console.log("successful");
        db.close();
      });
    });
    resolve();
  });
}

