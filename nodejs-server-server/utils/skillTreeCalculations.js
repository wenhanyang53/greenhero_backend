
function calculateBonusStatFlat(stat, node, accumulatedFlat) {
    let addition = 0;
    if(node.ability === stat) {
        if(node.augmentationType === 'flat') {
            accumulatedFlat += node.amount;
        }
    }
    if(node.sons && node.sons.length) {
        for(let son of node.sons) {
            addition += calculateBonusStatFlat(stat, son, 0);        
        }
        return accumulatedFlat + addition;
    } else {
        return accumulatedFlat;
    }
}

function calculateBonusStatPercentage(stat, node, accumulatedPercentage) {
    let addition = 0;
    if(node.ability === stat) {
        if(node.augmentationType === 'percentage') {
            accumulatedPercentage += node.amount;
        }
    }
    if(node.sons && node.sons.length) {
        for(let son of node.sons) {
            addition += calculateBonusStatPercentage(stat, son, 0);        
        }
        return accumulatedPercentage + addition;
    } else {
        return accumulatedPercentage;
    }
}

exports.calculateBonusStatFlat = calculateBonusStatFlat;
exports.calculateBonusStatPercentage = calculateBonusStatPercentage;