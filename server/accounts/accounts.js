const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const account = require("../models/accounts");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

const accounts = (req, res) => {
  let test = async function() {
    const exist = await account.getByUsername(req.body.username);
    if (exist == null) {
      let data = {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        middlename: req.body.middlename,
        batch: req.body.batch,
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
      };
      await account.addAccount(data);
      let item = await account.getLastAccount();
      res.send(item);
    } else {
      res.json({
        message: "Username already exist!"
      });
    }
  };
  test();
};

module.exports = { accounts };
