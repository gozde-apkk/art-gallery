


const asyncHandler = require("express-async-handler");
const { userModel } = require("../models/user");





const getUsers =  asyncHandler(async (req, res) => { 
    res.status(200).json({message : "Get all users"});
})



const createUser = asyncHandler(async (req, res) => {
    console.log("The request body", req.body);
    const {username, email, password} = req.body;
    if(!username || !email || !password) {
        return res.status(400).json({message: "All fields are required"});
    }
    res.status(200).json({message: `Create user ${username} ${email} ${password}`})
});



const getUser = (req, res) => {
    res.status(200).json({message : `Get user ${req.params.id}`})
}

const updateUser = (req, res) => {
    res.status(200).json({message : `Update user ${req.params.id}`})
}

const deleteUser = (req, res) => {
    res.status(200).json({message : `Delete user ${req.params.id}`})
}


module.exports = {
    getUsers,
    createUser,
    getUser,
    updateUser,
    deleteUser}