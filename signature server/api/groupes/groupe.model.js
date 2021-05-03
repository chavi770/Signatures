var mongoose = require('mongoose');

var groupeSchema = new mongoose.Schema({
    name: String,
    numOfPeople: Number,
    numOfSing: Number,
    logo: String
});

var Groupe = mongoose.model('groups', groupeSchema);

module.exports = {
    Groupe
}