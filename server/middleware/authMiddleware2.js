


const express = require("express");
const expressAsyncHandler = require("express-async-handler");
const User = require("../models/user");
const  jwt = require("jsonwebtoken");



const protect = expressAsyncHandler(async (req, res, next) => {
    

    try {
        const token = req.cookies.token
        console.log(`token: ${token}`)
        if(!token) {
            res.status(404)
            throw new Error("Not authorized, please login")
        }

        const verified = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findOne(verified.id).select("-password");   
        if (!user) return res.status(400).send("Wrong user");
        // if(!user) {
        //     res.status(401)
        //     throw new Error("User not found")
        // }
        req.user = user
        next();
    }catch (e) {
        res.status(401);
        throw new Error("Not authorized, please login")
    }
})


module.exports = {protect}