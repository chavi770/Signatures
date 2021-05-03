const {
    Sing
} = require('./segnitures.model');

const {
    addSingToGroup
} = require('./segnitures.service')
// get the list of the segnitures
async function getSegnitures(req, res) {
    var result = await Sing.find({});
    res.send(result);
};

// get spesfic sing by id
async function getSingById(req, res) {
    var result = await Sing.findById(req.params.id);
    res.send(result);
};

// create new group and add to collection
async function createSing(req, res) {
    var obj = new Sing(req.body);
    console.log('obj', obj)
    addSingToGroup(obj.gruopName);
    var result = await obj.save();
    res.send(result);
};

// updating the corrent sing by id
async function updateSing(req, res) {
    //the object to update
    var updateOBj = {
        id: req.body._id,
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        msg: req.body.msg,
        gruopName: req.body.gruopName
    }

    // invoke the update in the db
    var result = await Sing.findOneAndUpdate({
        _id: req.body._id
    }, updateOBj, {
        new: true,
        useFindAndModify: false
    });

    // Sending the reuslt
    res.send(result);
};

// delete sing by id in the param
async function deleteSing(req, res) {
    var result = await Sing.findOneAndRemove({
        _id: req.params.id
    });
    res.send(result);
};

async function count() {

    var result = await Sing.count({})
    console.log('count', count)

    result.save()
}

module.exports = {
    getSegnitures,
    getSingById,
    createSing,
    updateSing,
    deleteSing,
    count
}