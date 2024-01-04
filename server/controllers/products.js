
const Product = require("../models/product.js");

const product  = [
    {name : 'Freedom',
     price: 20,
     size : [20,30],
     description: 'Abstract Geometric Forms',
     image : 'image1.jpg',
     like : 0,
     artistName : 'Puerto Rico'
    },
    {name : 'The Light',
    price: 50,
    size : [70,30],
    description: 'Abstract Geometric Forms',
    image : 'image1.jpg',
    like : 20,
    artistName : 'Ripon Saha'
   },
   {name : 'Void Creeper',
   price: 120,
   size : [50,80],
   description: 'Price on Request',
   image : 'image3.jpg',
   like : 10,
   artistName : 'Le Jandrier'
  },

]


//the passed
const getAllProducts = async (req , res) => {
  try {
      const products = await Product.find();
      res.status(200).json ({products});
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
    const {id : productId} = req.params
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
  updateProduct
};
