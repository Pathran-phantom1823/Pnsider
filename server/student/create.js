const bodyParser = require('body-parser')
const subscriber = require("../model/Student");
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
            fullname : data.fullname,
            batch: data.batch,
            username:data.username, 
            email : data.email,
            address : data.address
        }
        await subscriber.addStudent(newsubs)
        res.status(200).send("added successfully!")
    }catch{
        res.status(400).send("theres a problem in adding a new subscriber")
    }
}
test()
}

module.exports = {createStudent}