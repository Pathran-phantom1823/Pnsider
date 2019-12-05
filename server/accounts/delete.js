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

const remove = (req, res) => {
  let test = async function() {
    let accounts = await account.deleteAccount(req.body.username);
    console.log("accounts : ", accounts);
    res.status(200).send("accounts deleted!");
  };
  test();
};

module.exports = { remove };