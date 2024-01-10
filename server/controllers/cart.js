

const Cart   = require('../models/cart')
const User= require('../models/user');
const Product= require('../models/product')
const fetchCartByUser = async (req, res) => {
  const { id } = await User.findOne({id : req.user});
  console.log(id)

    try {
      const cartItems = await Cart.find({ user: id });
  
      res.status(200).json(cartItems);
    } catch (err) {
      res.status(400).json(err);
    }
  };


  // const addToCart = async (req, res) => {
  //   const { id } = req.body
  //   const user =   await User.findOne({id });
  //   console.log(user)
  //   const { product} = req.body;
  //   const item = await Product.findById(product);
  //   console.log(item)
  //   const {quantity} = req.body;
  //   console.log(quantity);
 
  //   try {
  //     const cart = await Cart.create({
  //       product: item,
  //       user: user,
  //       quantity : quantity
  //     });
  //     console.log(cart)
  //      const doc =  await cart.save()
  //     res.status(200).json(doc);
  //   } catch (err) {
  //     res.status(400).json(err);
  //   }
  // };


  const addToCart = async (req, res) => {
    try {
      const { product } = req.body;
      console.log("product", product)
      const item = await Product.findById(product);
      console.log("item", item);
        item.save();
      const quantity = req.body;
      console.log(quantity);
      const newItem = await Cart.Cart.create ({
        product: item,
        quantity: quantity
      });
    console.log(newItem)
    newItem.save();
        res.status(200).json(newItem)
        
      // / Assuming id is the _id of the user
      // const user = await User.findOne({ _id: id });
      // console.log("user", user);
  
      // const { product } = req.body;

  
      // const { quantity } = req.body;
      // console.log(quantity);
  
      // const cart = await Cart.Cart.create({
      //   product: item,
      //   user: user,
      //   quantity: quantity
      // });
  
      // console.log(cart);
      // res.status(200).json(cart);
    } catch (err) {
      console.error(err);
      res.status(400).json(err);
    }
  };


const deleteFromCart = async (req, res) => {
    const { id } = req.params;
    try {
    const doc = await Cart.findByIdAndDelete(id);
    res.status(200).json(doc);
  } catch (err) {
    res.status(400).json(err);
  }
};



const updateCart = async (req, res) => {
    const { id } = req.params;
    try {
      const cart = await Cart.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      const result = await cart.populate('product');
  
      res.status(200).json(result);
    } catch (err) {
      res.status(400).json(err);
    }
  };



  module.exports = {
    fetchCartByUser,
    addToCart,
    deleteFromCart,
    updateCart
  }