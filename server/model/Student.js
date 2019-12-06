const mongoose = require("mongoose");

var Schema = new mongoose.Schema({
    fullname: {type:String},
    batch: {type:String},
    username: {type:String,  unique:true},
    email: {type: String},
    password: {type: String}
 });

 Schema.statics.addStudent = async function (subscriber){
   var Subscriber = new this(subscriber);
   var result =  await Subscriber.save(subscriber);
   console.log(result);
   return result;
}

Schema.statics.getLastStudent = async function() {
   return await this.findOne().sort({_id:-1}).limit(1);
}

Schema.statics.retrieveStudent = async function(){
   return await this.find();
}

Schema.statics.getByEmail = async function(email) {
   return await this.findOne({"email" : email});
}

module.exports = mongoose.model('subscriber', Schema);;