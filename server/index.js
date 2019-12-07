var bodyParser = require("body-parser");
var app = require('express')();
var express = require('express');
var http = require("http").Server(app)
var port = process.env.PORT || 5000;
var mongoose = require('mongoose');
var cors = require('cors')
//var bcrypt = require('bcrypt');
var update = require("./model/Student")
var addStudent = require("./student/create");
var retreive = require("./student/retrieveStudent")
var question = require("./question/createquestions")
app.use(cors());

mongoose.connect('mongodb://localhost:27017/students', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('Now connected to MongoDB!'))
  .catch(err => console.error('Something went wrong', err));

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log("Connected!")
});


app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({
    extended: true
  }));

app.use(express.static("public"));

// app.post('/student/create', function (req, res) {
//     addStudent.createStudent(req,res)
// })

// app.post('/question/create', function (req, res) {
//   question.createStudent(req,res)
// })

// app.get('/accounts/retrieveAll', function (req, res) {
//     retreive.retrieveStudents(req, res)
// })

// app.put('/account/update/:id', (req, res) => {
//   let options = { new: true };
//     update.findByIdAndUpdate(req.params.id, req.body.data , options, (err, student) => {
//       if (err) return res.status(404).send({message: err.message});
//       return res.send({ message: 'note updated!', student });
//     });
//   });

// app.delete('/account/delete/:id', (req,res) => {
//   update.findByIdAndRemove(req.params.id, (err) => {
//     if (err) return res.status(404).send({message: err.message});
//     return res.send({ message: 'note deleted!' });
//   });
// });

app.post('/staff/summary/:id', (req, res) => {
    console.log("Summary wa kaabot")
    let item1 = [{num: "Jane"}, {num: "Joy"}, {num: "Jessan"}]
    console.log(item1)
    res.send(item1)
})

http.listen(port, function () {
    console.log('listening on *:' + port);
});