const express = require('express');
const router = express.Router();
const Post = require(__dirname+'/../model/Answer');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken')


router.post('/answers', (req, res) =>{
    let user = jwt.decode(req.body.token);
    let studentID = mongoose.Types.ObjectId(user._id);
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

router.get('/previuosAnswers', (req, res) => {
    let studentID;
    Post.find(req.body.studentID)
    .then(doc =>{
        console.log(doc)
        res.json(doc);
    })
    .catch(err =>{
        res.status(500).send(err);
    });
});



module.exports = router;