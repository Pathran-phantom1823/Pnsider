const bodyParser = require('body-parser')
const question = require("../model/Questions");
const express = require('express')
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

const createStudent = (req,res) =>{
    var data = req.body
    let test = async function (){
        try{
        var newsubs = {
            q1 : data.q1,
            q2 : data.q2,
            q3 : data.q3,
            q4 : data.q4,
            q5 : data.q5,
            q6 : data.q6,
            q7 : data.q7,
            q8 : data.q8,
            q9 : data.q9,
            q10 : data.q10,
            q11: data.q11,
            q12 : data.q12,

          
        }
        await question.addQuestions(newsubs)
        res.status(200).send("added successfully!")
    }catch{
        res.status(400).send("theres a problem in adding a new subscriber")
    }
}
test()
}

module.exports = {createStudent}