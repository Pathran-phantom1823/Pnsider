const Student = require('../model/Student')

function findUser(Collection, filter){
    return new Promise((resolve, reject) =>{
        Collection.findOne(filter)
        .then(data =>{  
            if(data){
                console.log(data,'data')
                resolve(data)
            }else{
                resolve('not found')
            }
        })
        .catch(err =>{
            reject(err)
        })
        

    })
}

function retrieveAllUser(filter){
    return new Promise((resolve, reject) =>{
        Student.find(filter)
        .then(data =>{
            if(data){
                resolve(data)
            }else{
                resolve('No students yet')
            }
        })
        .catch(err =>{
            reject(err)
        })
    })
}

module.exports = {
    findUser,
    retrieveAllUser
}