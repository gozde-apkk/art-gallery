



const express = require("express");
const { getAllProducts,createProduct, getProductById, getProductsByID, deleteProduct, updateProduct } = require("../controllers/products");
const router = express.Router();



router.route("/").get(getAllProducts).post(createProduct)
router.route("/:id").get(getProductsByID).delete(deleteProduct).patch(updateProduct)

module.exports = router;