const express = require('express')
const app = express();
const cors = require('cors')
const mongoose = require('mongoose');
const login = require('./admin/login');
const verify = require('./admin/verifyToken');
const createAdmin = require('./admin/createAdmin');
// const subscribe = require('./subscriber/subscribe');
const create  = require('./accounts/accounts');
// const retrieveAll = require('./events/retrieveAll');
// const retrieveByTitle = require('./events/retrieveByTitle')
// const remove = require('./accounts/delete');
// const update = require('./accounts/update');
const retrieveAccounts = require('./accounts/retrieveAccounts')
const account = require("./models/accounts");
const bodyParser = require('body-parser')

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

mongoose.connect('mongodb://localhost:27017/PN', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('Now connected to MongoDB!'))
  .catch(err => console.error('Something went wrong', err));

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log("we're connected")
});


app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(function (error, req, res, next) {
  if(error instanceof SyntaxError){ //Handle SyntaxError here.
    return res.status(500).send({data : "Invalid data"});
  } else {
    next();
  }
});


const checkToken = (req, res, next) => {
  console.log(req.headers)
  const header = req.headers['authorization'];

  if(typeof header !== 'undefined') {
      const bearer = header.split(' ');
      const token = bearer[1];

      req.token = token;
      next();
  } else {
      //If header is undefined return Forbidden (403)
      res.sendStatus(403)
  }
}

app.get('/', checkToken, function (req, res) {
  verify.verifyToken(req, res);
})
app.post('/admin', (req, res) => {
  createAdmin.create(req, res);
})
app.post('/login', function (req, res) {
  login.login(req, res);
})

app.post('/add/student/account', function (req, res) {
  create.accounts(req,res)
})

app.get('/accounts/retrieveAll', function(req, res){
  retrieveAccounts.retrieveAccounts(req, res)
})

app.delete('/account/delete/:id', (req,res) => {
  account.findByIdAndRemove(req.params.id, (err) => {
    if (err) return res.status(404).send({message: err.message});
    return res.send({ message: 'note deleted!' });
  });
});

app.put('/account/update/:id', (req, res) => {
  let options = { new: true };
  account.findByIdAndUpdate(req.params.id, req.body.data , options, (err, note) => {
    if (err) return res.status(404).send({message: err.message});
    return res.send({ message: 'note updated!', note });
  });
})


app.listen(5000, function () {
  console.log("Connected to port : 5000!")
})
