const mongoose = require("mongoose");

var Schema = new mongoose.Schema({
    firstname: {type:String},
    lastname:{type:String},
    middlename:{type:String},
    batch:{type:Number},
    email: {type: String, unique:true},
    username:{type:String, unique:true},
    password:{type:String, required:true}
 });

 Schema.statics.addAccount = async function (student){
    var Student = new this(student);
    var result =  await Student.save(student);
    console.log(result);
    return result;
 }
 
 Schema.statics.getLastAccount = async function() {
    return await this.findOne().sort({_id:-1}).limit(1);
 }

 Schema.statics.retrieveAccount = async function(){
     return await this.find()
 }

 Schema.statics.updateAccount = async function(
    id,
    firstname,
    lastname,
    middlename,
    batch,
    email,
    username,
    password,
  ) {
    return await updateEvent.updateOne({ "_id": id }, { $set: { "firstname" : firstname, "lastname" : lastname, "middlename" : middlename, "batch":batch, "email" : email, "username":username, "password":password } });
  };
  
  Schema.statics.deleteAccount = async function(id) {
    return await this.deleteOne({ _id: id });
  };
 
 Schema.statics.getByUsername = async function(email) {
    return await this.findOne({"email" : email});
 }

 module.exports = mongoose.model('student', Schema);