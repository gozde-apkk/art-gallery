


const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    creater: {
        type: String,
        required: true
    },
    name : {
        type : String,
        required : true
    },
    reviews: {
        type: Number,
        required: true
    },
    favorite: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    images: {
        type: String,
        required: true
    },
    category : {
        type : String,
        required : true
    },
    createTime: {
        type: Date,
        required: true
    },
})