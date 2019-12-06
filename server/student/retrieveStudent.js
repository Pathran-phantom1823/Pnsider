const students = require("../model/Student");

const retrieveStudents = (req, res)=>{
    let test = async function() {
        let student = await students.retrieveStudent();
        console.log("student : ", student);
        res.status(200).send(student);
      };
      test();
    };
    
    module.exports = { retrieveStudents };