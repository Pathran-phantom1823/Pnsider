const mongoose = require('mongoose')
var url = 'mongodb://localhost:27017/PN';

module.exports.connect = function(){
    mongoose.connect(url,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() =>{
        console.log('connected')
    })
    .catch(err =>{
        console.log(err)
    })
}