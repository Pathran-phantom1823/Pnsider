
const express = require('express')
const router = express.Router();
const find = require('../modules/User')
const Student = require('../model/Student')
const Staff = require('../model/Staff')
const account = require('../modules/authenticate')

router.post('/', (req, res) => {
    console.log(req.body)
    res.send("Heloooooo")
    res.send(req.body)
    // async function login() {
    //     try {
    //         let filter = { username: req.body.username }
    //         if (req.body.username == "admin") {
    //             userinfo = await find.findUser(Staff, filter)
    //         } else {
    //             userinfo = await find.findUser(Student, filter)
    //         }

    //         if (userinfo != "not found") {
    //             account.validate(userinfo, req.body.password)
    //                 .then(data => {
    //                     console.log(data)
    //                     res.json(data)
    //                 })
    //                 .catch(err => {
    //                     res.status(500).send(err)
    //                 });
    //         } else {
    //             res.status(404).send('not found')
    //         }
    //     } catch (err) {
    //         res.status(500).send(err)
    //     }
    // }
    // login()
    // Student.findOne({username: req.body.username})
    // .then(doc =>{
    //   if(doc){
    //      // console.log(bcrypt.compareSync(req.body.password,doc.password))
    //     account.validate(doc, req.body.password)
    //     .then(data =>{ 
    //         console.log(data)
    //         res.json(data)
    //     })
    //     .catch(err =>{
    //         res.status(500).send(err)
    //     });
    //   }else{
    //       res.status(404).json({message: 'Account not found'})
    //   }
    // })
    // .catch(err => {
    //     res.status(400).json({err: err.message})
    // })
});

module.exports = router;