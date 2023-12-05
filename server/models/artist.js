



import { Schema, model } from "mongoose";



const artistSchema = new Schema({
    name : {
        type : 'string',
        required : true,
    },
    lastname : {
        type : 'string',
        required : true,
    },
      email: {
        type : 'string',
        required : true,
    },
    password : {
        type : 'string',
        required : true,
    },

})


module.exports = model('Artist', artistSchema)