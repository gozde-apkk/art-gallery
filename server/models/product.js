


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
        
    },
    images: {
        type: String,
        required: true
    },
    category : {
        type : String,
        required : true
    },

},{timestamps : true})



module.exports = mongoose.model('Product', productSchema);