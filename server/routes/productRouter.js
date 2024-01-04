



const express = require("express");
const { getAllProducts,createProduct, getProductsByCategory, getProductsByID, deleteProduct, updateProduct, getProducts } = require("../controllers/products");
const router = express.Router();



router.route("/").get(getAllProducts).post(createProduct)
router.route("/:id([0-9a-fA-F]{24})").get(getProductsByID).delete(deleteProduct).patch(updateProduct)
router.route("/:category").get(getProductsByCategory)
module.exports = router;