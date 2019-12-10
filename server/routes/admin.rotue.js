//est
const express = require('express');
const router = express.Router();
const Student = require('../model/Student'); 
const studentController = require('../modules/Student');
const query = require('../modules/analytics');
const Admin = require('../model/admin')



router.post('/student/create', (req, res) => {
    let student = new Student(req.body);
    student.save()
        .then(() => {
            res.status(200).json({
                message: 'successfull'
            });
        })
        .catch((err) => {
            res.status(400).json({
                err: err.message
            });
        });
});

router.get('/students', (req, res) => {
    let filter = {
        deletedAt: null
    };
    studentController.retrieveAllUser(filter)
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.status(400).send(err);
        });


});

router.post('/student/delete/:id', (req, res) => {
    let options = {
        deletedAt: new Date()
    };
    Student.findByIdAndUpdate(req.params.id, options, {
            new: true
        })
        .then(doc => {
            res.json(doc);
        })
        .catch(err => {
            res.status(400).send(err);
        });
});

//NOTE:::::: new user info to be placed in the database
router.post('/student/update/:id', (req, res) => {
    console.log(req.body, "Update Details")
    req.body['editedAt'] = new Date()
    Student.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        })
        .then(doc => {
            console.log("Update here")
            res.json(doc)
        })
        .catch(err => {
            console.log("Here")
            res.status(400).send(err)
        })
})


router.get('/report/summary/:number/:description', (req, res) => {
    console.log(req.params.number, req.params.description)
    let date = new Date();
    let filter;
    console.log(req.params.number)
    let number = req.params.number.substring(1,req.params.number.length)
    if(number > 6){
         filter = {category: 'academicLife',date: date, questionNumber: req.params.number, value: req.params.description};
    }else{
         filter = {category: 'centerLife',date: date, questionNumber: req.params.number, value: req.params.description};
    }
    let projection = {studentID:1, timestamp:1};
    //console.log(filter)
     query.getStudents(filter, projection)
     .then(data =>{
         console.log(data)
         res.json(data);
     }) 
     .catch(err =>{
         console.log(err)
         res.send(err)
    })



})



router.post('/report/summary/:number', async (req, res) => {
    let number = req.params.number
    let length = await query.getLength();
    if(req.params.number < 7){
        query.analytics('centerLife', number)
        .then(data =>{
         res.json({data:data, length:length})
        })
        .catch(err =>{
            res.send(err)
        })
        
    }else{
        query.analytics('academicLife', number)
        .then(data =>{
            res.json({data:data, length:length})
        })
        .catch(err =>{
            res.send(err)
        })
    }
   


})

//after update password is not hashed anymore
//all fields must have value otherwise it will become null



// router.get('/twoWeeksAnswer', (req, res) => {
//     const date = new Date();
//     console.log(new Date(date));
//     let rangeDate = date.setHours(-336, 00, 00);
//     console.log(new Date(rangeDate))
//     Post.find({ date: { $gt: new Date(Date.now() + 12096e5), $lt: date } })
//         .then(doc => {
//             res.status(200).json({ number: doc.length })
//             console.log(doc)
//         })
//         .catch(err => {
//             res.status(500).json({ message: err.message })
//         })
// })

router.post('/createadmin',(req, res) =>{
    let student = new Admin(req.body);
    student.save()
        .then(() => {
            res.status(200).json({ student })
        })
        .catch((err) => {
            res.status(400).json({ err: err.message })
        })
})


//,"categories.academicLife.Q6":"good"

// Post.find({timestamp:{$lte:new Date()}} )
//     .then( data =>{
//         if(data){
//             res.send(data)
//         }
//     })
//     .catch(err =>{
//         console.log(err)
//         res.send(err)
//     })


module.exports = router;
