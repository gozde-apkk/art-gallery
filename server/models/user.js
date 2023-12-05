


import { Schema, model } from "mongoose";


const userSchema = new Schema({
    username : {
        type : String,
        required : true,
        unique : true,
    },
    email : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    }
})


export const userModel = model("User", userSchema);