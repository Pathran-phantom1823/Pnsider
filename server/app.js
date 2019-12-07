const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const port = process.env.PORT ||8081;
const userRoute = require('./routes/student.route');
const staffRotue = require('./routes/staff.rotue');
const loginRoute = require('./routes/login')
const DB = require('./connectDB')



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

DB.connect()

app.get('/',(req,res) =>{
    console.log(req.body)
    console.log('hello world')
});

app.use('/students',userRoute)

app.use('/admin', staffRotue)
app.use('/login',loginRoute )

app.listen(port, (err) => {
    console.log(`listening to ${port}`)
})