const Post = require('../model/Answer');
const Student = require('../model/Student');

function analytics(category, number) {
    return new Promise((resolve, reject) => {
        //kulang og match para sa date, batch
        //mangayo ko date para sa match
        Post.aggregate([
            {
                $match:{
                    timestamp:{ $lte: new Date(), $gte:new Date(Date.now() - 12096e5)}
                }
            }, 
            {
                $group: {
                    _id: `$categories.${category}.Q${number}`,
                    answers: { $sum: 1 },
                    timestamp:{  $first: '$timestamp' }
                }
            },
            {
                $project: {
                    _id: 1,
                    description: { $ifNull: ["Q" + number, "Unspecified"] },
                    answers: 1,
                    timestamp:1
                   
                }
            },
        ])
            .then((data) => {
                resolve(data);
            })
            .catch(err => {
                reject(err);
            });
    });
}


//NOTE ::::::::::: filter data by date from user
function getLength(){
    return new Promise((resolve, reject) =>{
       // {$gt:filter.rangeDate, $lt:filter.date}
       //{date:{$gt:filter.rangeDate, $lt:filter.date}}
        Post.countDocuments().then(data => {
            resolve(data);
           })
           .catch(err =>{
             reject(err);
           });
    });
}

function getStudentsInfo(data, projection){
    return new Promise((resolve, reject) =>{
        let select = 'firstname lastname gender batch id';
        let endDate = new Date().setDate(data.date.getDate()+14);
        let filter = {timestamp:{$gte:new Date(data.date), $lte:new Date(endDate)}};
        filter[`categories.academicLife.Q${data.questionNumber}`] = "bad";

        Post.find(filter, projection)
        .populate('studentID', select)
        .sort({timestamp: 1})
        .then( data =>{
            if(data){
                resolve(data);
            }else{
                resolve('not users');
            }
        })
        .catch(err =>{
            console.log(err);
            reject(err);
        });
    });
}

function getGenderCount(studentID){
    return new Promise((resolve, reject) => {
        
        // let endDate = new Date().setDate(data.date.getDate()+14);
        // let filter = {timestamp:{$gte:new Date(data.date), $lte:new Date(endDate)}};
        // filter[`categories.academicLife.Q${data.questionNumber}`] = "bad";
        // console.log(filter)
        //kulang og match para sa date, batch
        //mangayo ko date para sa match
        Student.aggregate([
            {
                $match:{
                   _id:{$in:studentID}
                }
            },
            {
              $group: {
                    _id:'$gender',
                    answers: { $sum: 1 },
                    timestamp:{  $first: '$timestamp' }
                }
            },
            {
                $project: {
                    _id: 1,
                   // description: { $ifNull: ["Q" + number, "Unspecified"] },
                    count: 1,
                    timestamp:1
                   
                }
            },
        ])
        
            .then((data) => {
                resolve(data);
            })
            .catch(err => {
                reject(err);
            });
    });
}


// function getStudentsInfo(id){
//     return new Promise((resolve, reject) =>{

//     })
// }


module.exports = {
    analytics,
    getLength,
    getStudentsInfo,
    getGenderCount

};