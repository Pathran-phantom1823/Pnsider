const express = require('express');
const router = express.Router();
const Student = require(__dirname+'/../model/Student');
const Post = require(__dirname+'/../model/Post');
const mongoose = require('mongoose');
const account = require('../modules/authenticate')
const bcrypt = require('bcryptjs')


router.post('/answer', (req, res) =>{
    let studentID = mongoose.Types.ObjectId('5dce4e9f4ed64817c8a05e43')
    let data = {
        studentID: studentID,
        categories:{
            academicLife:req.body.academicLife,
            centerLife: req.body.centerLife
        }
    };
    let post = new Post(data);
    post.save()
    .then(() =>{
        res.status(200).json({message: 'Successfully saved'});
    })
    .catch( err =>{
        res.status(400).json({err:err.message});
        
    });
    
});


module.exports = router