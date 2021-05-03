const {
    Groupe
} = require('./groupe.model');

// get the list of the groups
async function getGroups(req, res) {
     var result = await Groupe.find({});
    res.send(result);
};

// get spesfic group by id
async function getGroupsById(req, res) {
    var result = await Groupe.findById(req.params.id);
    res.send(result);
};

// create new group and add to collection
async function createGroupe(req, res) {
    var obj = new Groupe(req.body);
    var result = await obj.save();
    res.send(result);
};

// updating the corrent group by id
async function updateGroupe(req, res) {
    //the object to update
    var updateOBj = {
        id: req.body._id,
        name: req.body.name,
        numOfPeople: req.body.numOfPeople,
        numOfSing: req.body.numOfSing,
        logo: req.body.logo
    }

    // invoke the update in the db
    var result = await Groupe.findOneAndUpdate({
        _id: req.body._id
    }, updateOBj, {
        new: true,
        useFindAndModify: false
    });

    // Sending the reuslt
    res.send(result);
};

// delete group by id in the param
async function deleteGroupe(req, res) {
    var result = await Groupe.findOneAndRemove({
        _id: req.params.id
    });
    res.send(result);
};

// get the list of the groups
async function getGroupsName(req, res) {
    var result = await Groupe.find({}).select('name');
   res.send(result);
};

module.exports = {
    deleteGroupe,
    updateGroupe,
    createGroupe,
    getGroupsById,
    getGroups,
    getGroupsName
}