



const express = require("express");
const router = express.Router();
const {
  getProducts,
  getProductById,
} = require("../controllers/products");
const { fake_data } = require("../data/fakedata");

router.get("/", (req, res) => {
    res.send(fake_data)
});
router.get("/:id", getProductById);

module.exports = router;