var mongoose = require('mongoose');

var segnituresSchema = new mongoose.Schema({
    name: String,
    phoneNmber: String,
    email: String,
    msg: String,
    gruopName: String
});

var Sing = mongoose.model('segnitures', segnituresSchema);

module.exports = {
    Sing
}