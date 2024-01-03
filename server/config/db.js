require('dotenv').config();
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://gozdeapak:157366@cluster0.g6o8zjo.mongodb.net/', {
      useNewUrlParser : true,
      useUnifiedTopology: true,
    });

    console.log('MongoDB Connect')
  } catch (error) {
    console.log('MongoDB Fail')
  }
}


module.exports = connectDB  