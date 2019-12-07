const express = require('express')
const router = express.Router();
const find = require('../modules/Student')
const Student = require('../model/Student')
const Staff = require('../model/admin')
const account = require('../modules/authenticate')

router.post('/', (req, res) => {

    async function login() {
        try {
            console.log(req.body.username)
            let filter = { username: req.body.username }
            if (req.body.username == "admin") {
                userinfo = await find.findUser(Staff, filter)
            } else {
                userinfo = await find.findUser(Student, filter)
            }

            if (userinfo != "not found") {
                account.validate(userinfo, req.body.password)
                    .then(data => {
                        res.json(data)
                    })
                    .catch(err => {
                        res.status(500).send(err)
                    });
            } else {
                res.status(404).send('user not found')
            }
        } catch (err) {
            res.status(500).send(err)
        }
    }
    login()
});

module.exports = router;