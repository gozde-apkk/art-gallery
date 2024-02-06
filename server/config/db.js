require('dotenv').config();
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://gozdeapak:157366@ecommerce.cgwv5jn.mongodb.net/');

    console.log('MongoDB Connect')
  } catch (error) {
    console.log('MongoDB Fail')
  }
}


module.exports = connectDB  