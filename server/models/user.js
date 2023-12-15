
const mongoose = require('mongoose');

Schema = mongoose.Schema;

const userSchema = new Schema({
    username : {
        type : String,
        required : true,
        unique : true,
    },
    email : {
        type : String,
        required : true,
        unique : true,
    },
    password : {
        type : String,
        required : true,
        unique: true
    },
    avatar : {
        type : String,
        default : '',
    }
}, {timestamps : true})


module.exports = mongoose.model('User', userSchema);