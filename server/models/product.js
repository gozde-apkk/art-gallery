


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
    },
    favorite: {
        type: Number,
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


const virtual = productSchema.virtual("id")
virtual.get(function(){
    return this._id
})

productSchema.set('toJSON',{
    virtuals : true,
    versionKey : false,
    transform: function(dot , ret) {delete ret._id}
})
module.exports = mongoose.model('Product', productSchema);