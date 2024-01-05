
const Product = require("../models/product.js");
const ApiFeatures = require("../utils/apifeatures.js");



const getProductsByCategory = async (req,res) =>{

  try {
    const {category} = req.params;
    const products = await Product.find({category});
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({message : error.message});
  }
}
//the passed
const getAllProducts = async (req , res) => {
  try {
    // const resultPerPage = 5;
    const productsCount = await Product.countDocuments();
    //  const apiFeature = new ApiFeatures(Product.find(), req.query).search( ).filter().pagination(resultPerPage);

    //   const products = await apiFeature.query;

    const products = await Product.find({});
      
      res.status(200).json (products);
  } catch (error) {
      res.status(500).json({message : error.message});
  }
  }

//thr passed
  const createProduct = async (req , res) => {
    try {
        const product = await Product.create(req.body);
        res.json ({product});
        console.log("Product: " , product)
    } catch (error) {
        res.status(500).json({message : error.message});
    }
    }
  


  //the passed        
const getProductsByID = async (req, res) => {
  try {

    const {id : productId} = req.params;
    const product = await Product.findOne({_id : productId});
    if(!product){
      return res.status(404).json({msg : `No product with id: ${productId }`})
    }
    res.status(200).json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

//THE PASED
const deleteProduct = async (req, res) => {
  try {
    const {id : productId} = req.params;
    const product = await Product.findByIdAndDelete({_id : productId});
    if(!product){
      return res.status(404).json({msg : `No product with id: ${productId }`})
    }
    res.status(200).json(product)
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};
//the passed  
const updateProduct = async (req, res) => {
  try {
    const {id : productId} = req.params;
    const product = await Product.findByIdAndUpdate({_id : productId}, req.body, {
      new : true,
      runValidators : true
    });
    if(!product){
      return res.status(404).json({msg : `No product with id: ${productId }`})
    }
    res.status(200).json(product)
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};
module.exports = {
  getProductsByID,
  getAllProducts,
  deleteProduct,
  createProduct,
  updateProduct,
  getProductsByCategory
};
