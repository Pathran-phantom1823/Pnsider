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

router.post('/summary', (req, res) => {
    async function queryShit() {
        try {
            var items = []
            for (let i = 1; i <= 10; i++) {
                if (i < 6) {
                    let data = await query.analytics('centerLife', i)
                    items.push(data)
                } else {
                    let data = await query.analytics('academicLife', i)
                    items.push(data)
                }
            }
            console.log(items)
            res.json(items)
        } catch (err) {
            res.send(err)
        }
    }

    queryShit();
    //console.log(query.analytics(1))
    // var items = [];
    // for (let i = 1; i <= 5; i++) {
    //     //console.log(i)
    //     Post.aggregate([
    //         {
    //             $group: {
    //                 _id: "$categories.centerLife.Q"+i ,
    //                 answers: {
    //                     $sum: 1
    //                 }
    //             }
    //         }
    //     ], (err, doc) => {
    //         if(doc) {
    //             //console.log(doc)
    //             items.push(doc[0])
    //         }
    //         if(err) {
    //             res.send(err.message)
    //         }
    //         console.log(items,'items')
    //     })
    //     res.json(items)
    // }


    // .then(doc => {
    //     var temp = []
    //     // console.log(doc)
    //     if(doc.length == 2) {
    //         temp.push(doc[0])
    //         temp.push(doc[1])
    //         //res.json(items)
    //     } else {
    //         temp.push(doc[0])
    //        // res.json(items)
    //     }

    // })
    // .catch(err => {
    //     console.log(err)
    //     res.send(err)
    // })
    // items.push(temp)
    // Post.aggregate( [
    //     { $match : {  'categories.academicLife.Q1' : "good"} },
    //     { $group: { _id: "$categories.academicLife.Q1", goodcount: { $sum: 1 } } }
    //     ] )
    //     .then(doc =>{
    //         console.log(doc)
    //         res.end()
    //     })
    //     .catch(err =>{
    //         console.log(err)
    //         res.send(err)
    //     })
    //     .finally(
    //         res.end()
    // )
    // Post.aggregate([
    //     { $match: { '_id': "5de0cb5d3d15e42a3843795e" }},
    //     {
    //                 "$group": { _id: "$categories.academicLife", count: { $sum: 1 } }
    //     },
    //     {
    //         $project: {
    //         _id: 1,
    //         description: { $ifNull: [ "Q", "Unspecified" ] },
    //         count:1
    //         }
    //     }
    // //    {
    // //     $match: {
    // //         "timestamp": {$lte:'2019-11-29'}
    // //     }
    // //    },
    // //     {
    // //         "$group": { _id: "$categories.academicLife.Q"+i, count: { $sum: 1 } }
    // //     },
    // //     {
    // //         $project: {
    // //            _id: 1,
    // //            description: { $ifNull: [ "Q"+i, "Unspecified" ] },
    // //            count:1
    // //         }
    // //      }
    // ])
    //     .then(doc => {
    //         console.log(doc)
    //         res.end()
    //     })
    //     .catch(err => {
    //         console.log(err)
    //         res.send(err)
    //     })
    //     .finally(
    //         res.end()
    //     )


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