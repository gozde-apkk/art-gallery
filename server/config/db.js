




const mongoose = require('mongoose');

const db = () => {
    mongoose.connect("mongodb+srv://gozdeapak:157366@ecommerce.cgwv5jn.mongodb.net/", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));
}


module.exports = db;