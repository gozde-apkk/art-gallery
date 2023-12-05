


const express = require("express");

const router = express.Router();



router.get('/' , shopController.getIndex() );
router.get('/details' , shopController.getProductDetails());
router.get('/product' , shopController.getProduct());
router.get('/cart' , shopController.getProductCart());
router.get('/order' , shopController.getProductCart());

module.exports = router;