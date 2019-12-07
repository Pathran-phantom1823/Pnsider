//est
const express = require('express');
const router = express.Router();
const Student = require('../model/Student');
const Post = require('../model/Post')
const mongoose = require('mongoose')
const query = require('../modules/query')

router.post('/create', (req, res) => {
    let student = new Student(req.body);
    student.save()
        .then(() => {
            res.status(200).json({ message: 'successfull' })
        })
        .catch((err) => {
            res.status(400).json({ err: err.message })
        })
});

router.get('/twoWeeksAnswer', (req, res) => {
    const date = new Date();
    console.log(new Date(date));
    let rangeDate = date.setHours(-336, 00, 00);
    console.log(new Date(rangeDate))
    Post.find({ date: { $gt: rangeDate, $lt: date } })
        .then(doc => {
            res.status(200).json({ number: doc.length })
            console.log(doc)
        })
        .catch(err => {
            res.status(500).json({ message: err.message })
        })
})

router.post('/summary/:id', (req, res) => {
    console.log("Summary wa kaabot")
    let item1 = [{num: "Jane"}, {num: "Joy"}, {num: "Jessan"}]
    res.json(item1)
})


router.post('/test', (req, res) => {
    Post.countDocuments({ timestamp: '2019-11-15' })
        .then(count => {
            console.log(count)
            res.json({ data: count })
            //and do one super neat trick
        })
        .catch(err => {
            res.status(500).send(err)
            //handle possible errors
        })
})


module.exports = router;