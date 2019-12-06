const mongoose = require("mongoose");

var Schema = new mongoose.Schema({
    q1: {type:String},
    q2: {type:String},
    q3: {type:String},
    q4: {type:String},
    q5: {type:String},
    q6: {type:String},
    q7: {type:String},
    q8: {type:String},
    q9: {type:String},
    q10: {type:String},
    q11: {type:String},
    q12: {type:String},
    
 });

 Schema.statics.addQuestions = async function (){
    var question = new this(question);
    var result =  await question.save(question);
    console.log(result);
    return result;
 }

 module.exports = mongoose.model('question', Schema);;