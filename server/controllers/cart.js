

const Cart = require('../models/cart');
const User= require('../models/user')
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


  const addToCart = async (req, res) => {
    const { id } = await user.findOne({id : req.user});
    console.log(id)
    try {
      const cart = await Cart.create({
        product: req.body.product,
        user: id,
        quantity : req.body.quantity
      });
      res.status(200).json(cart);
    } catch (err) {
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