const express = require('express');
const { fetchCategories, createCategory } = require('../controllers/category');

const router = express.Router();
//  /categories is already added in base path
router.route('/').get(fetchCategories).post(createCategory)

module.exports = router;