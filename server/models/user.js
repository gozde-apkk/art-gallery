
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

Schema = mongoose.Schema;

const userSchema = new Schema({
name : {
        type : String,
        required : [true , "Please add username"],
        unique : true,
    },
    email : {
        type : String,
        required : [true, "Please add email"],
        unique : true,
        trim : true,
        match : [
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            "Please add a valid email"
        ]
    },
    password : {
        type : String,
        required : [true, "Please add password"],
        unique: true,
        minLength : [6, "Password must be at least 6 characters"],

    },
    photo : {
        type : String,
        required : [true, "Please add photo"],
        default : 'https://i.ibb.co/4pDNDk1/avatar.jpg',
    },
    role : {
        type : String,
        default : 'customer',
        enum : ["admin", "customer"],
    },
    phone : {
        type : String,
        default : '+950',
    },
    address : {
        type : Object,
        //addres, state , country
    }
}, {timestamps : true})

// Match user entered password to hashed password in database
userSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
  };
//Encrypt pass before saving to database
userSchema.pre("save", async function(next) {
    if(!this.isModified("password")) {
        next();
    }
    //Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedpassword = await bcrypt.hash(this.password, salt);
    this.password = hashedpassword
    next();
});


module.exports = mongoose.model('User', userSchema);