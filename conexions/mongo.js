var mongoose = require('mongoose');
var connection = mongoose.connect('mongodb://localhost:27017');

mongoose.connection.on('open',(ref)=>{
    console.log('Conectado MongoDB');
});
module.exports=connection;