


const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    artist_name : {
        type : String,
        required : true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    like : {
        type : Number,
        default : 0
    },
    size: {
        type : Number,
        required : true
    },
    category : {
        type : String,
        required : true
    }
})