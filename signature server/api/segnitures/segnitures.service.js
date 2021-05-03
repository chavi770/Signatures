const {
    Groupe
} = require('../groupes/groupe.model');
const {
    Sing
} = require('./segnitures.model')
async function addSingToGroup(groupeName) {
    var result = await Groupe.findOne({
        name: groupeName
    });
    var count = await Sing.count({})

    console.log('result', result)
    console.log('count', count)
    result.numOfSing++;
    result.save()
}

module.exports = {
    addSingToGroup
}