const mongoose = require('mongoose')
var url = 'mongodb://localhost:27017/PNsider';

module.exports.connect = function(){
    mongoose.connect(url,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndexes:true
    })
    .then(() =>{
        console.log('connected')
    })
    .catch(err =>{
        console.log(err)
    })
}