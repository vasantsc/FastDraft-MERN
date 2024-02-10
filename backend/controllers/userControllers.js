const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');
const { response } = require('express');
const generateToken = require('../utils/generateToken');
const registerUser = asyncHandler(async (req, res) =>{
    const {name, email, password, pic} = req.body;
    const UserExist = await User.findOne({email});
    if(UserExist){
        res.status(400)
        throw new Error("User already exist!");
    }
    const newUser =await User.create({
        name,
        email,
        password,
        pic
    })
    if(newUser){
        res.status(201).json({
            _id:newUser._id,
            name:newUser.name,
            email:newUser.email,
            password:newUser.password,
            pic:newUser.pic,
            isAdmin:newUser.isAdmin,
        })
    }
    else{
        res.status(400)
        throw new Error("Something went wrong");
    }
})
const authUser = asyncHandler(async (req, res) =>{
    const { email, password} = req.body;
    const UserExist = await User.findOne({email});
    if(UserExist && (await UserExist.matchPassword(password))){
        res.status(200).json({
            _id:UserExist._id,
            name:UserExist.name,
            email:UserExist.email,
            password:UserExist.password,
            isAdmin:UserExist.isAdmin,
            pic:UserExist.pic,
            token:generateToken(UserExist._id,UserExist.name,UserExist.email)
        })
    }
    else{
        res.status(400)
        throw new Error("Something went Wrong");
    }
})
module.exports = {registerUser,authUser};