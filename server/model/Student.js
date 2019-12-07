const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const Schema = mongoose.Schema


var StudentSchema = new Schema({
    username:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    firstname:{
        type:String,
        required: true
    },
    lastname:{
        type:String,
        required: true
    },
    gender:{
        type:String,
        required: true
    },
    batch:{
        type:Number,
        required: true
    },
    dateCreated:{
        type: Date,
        default: Date.now(),
        required: true
    },
    deletedAt:{
        type: Date,
        default: null,
        required: false
    },
    editedAt:{
        type: Date,
        default: null,
        required: false
    }
  
});

StudentSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
        return next();
    }
    try {
        const hash = await bcrypt.hashSync(this.password, 10);
        this.password = hash;
        next();
    } catch (err) {
        next(err);
    }
});

module.exports = mongoose.model('Student', StudentSchema)