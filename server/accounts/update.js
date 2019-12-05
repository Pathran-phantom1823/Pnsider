const bodyParser = require("body-parser");
const account = require("../models/accounts");
const express = require("express");
const app = express();

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

const update = (req, res) => {
  console.log(req.body, 'body')

  let test = async function() {
    try{
      await account.updataAccount(
        req.params.id,
        req.body.firstname,
        req.body.lastname,
        req.body.middlename,
        req.body.username,
        req.body.email,
        req.body.password
      );
      let accounts = await account.retrieveEvents();
      res.status(200).send(accounts);
      console.log(accounts)
    } catch(err){
        res.send('error')
    }};
  test();
};

module.exports = { update };
