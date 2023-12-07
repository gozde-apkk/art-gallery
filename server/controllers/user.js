


const asyncHandler = require("express-async-handler");
const { User } = require("../models/user.js");
const user = require("../models/user.js");
const bcrypt = require("bcryptjs");




const getUsers =  asyncHandler(async (req, res) => { 
    res.status(200).json({message : "Get all users"});
})

// router.get('/getAll', async (req, res) => {
//     try{
//         const data = await Model.find();
//         res.json(data)
//     }
//     catch(error){
//         res.status(500).json({message: error.message})
//     }
// })

 const createUser = async (req, res , next) => {

    const {username , email, password} = req.body;
    const hashPassword = bcrypt.hashSync(password, 10)
    const data = new user({
        username: req.body.username,
        email: req.body.email,
        password : hashPassword
    })
    
    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
        console.log("User created successfuly")
    }
    catch (error) {
        next(error);
    }
}

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