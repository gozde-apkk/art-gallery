
require('dotenv').config();
const productData = require("../data/fakedata");
const connectDB = require('../config/db');
const Product = require('../models/product')


connectDB();

const importData = async() => {
    try {
        await Product.deleteMany({})
        await Product.insertMany(productData);
        console.log('Data Import Success')
        process.exit()
    } catch (error) {
        console.log('Data Import Error');
        process.exit(1);    
    }
}

importData();