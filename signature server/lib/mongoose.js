var mongoose = require('mongoose');

function initDb(){
    mongoose.connect("mongodb://127.0.0.1:27017/yud_shvat", {
         useUnifiedTopology: true ,
         useNewUrlParser: true 
        } );
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function() {
        console.log("the db is contedt");
      // we're connected!
    });
}

module.exports ={
    initDb
}