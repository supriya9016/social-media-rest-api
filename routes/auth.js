const express = require('express');
const jwt =require('jsonwebtoken');
const User =require('../models/user');
const bcrypt=require("bcrypt");
const router =express.Router();
router.post('/authenticate' , async(req,res) => {
    const {email ,password}=req.body;
    if(!email){
        return res.status(400).json({message:'"email" is required'});
    }
    if(!password){
        return res.status(400).json({message:'"password" is required'});
    }
        const user =await User.findOne({email});
        if(!user){
            return res.status(401).json({ message: 'Email or is incorrect'});
        }
        const validPassword= await bcrypt.compare(password,user.password)
        if(!validPassword){
            return res.status(401).json({message: 'Email or password is incorrect' });
        }
        const token =jwt.sign({userId:user._id},process.env.JWT_SECRET);
        res.json({token});
});
module.exports=router;