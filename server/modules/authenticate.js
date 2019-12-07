const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('../config/config');

function validate(data,password){
    return new Promise((resolve, reject) =>{
        if(bcrypt.compareSync(password,data.password)){
            var token = jwt.sign({
                _id: data._id,
                username: data.username
            },config.secret_key, {
                expiresIn: 86400 
            });
            resolve({
                auth: true,
                token: token,
                message: 'login successful'
              });
        }else{
            reject({message:'wrong password'})
        }
    })
            
};


module.exports = {
    validate
};