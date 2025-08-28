const express=require('express');
const router =express.Router();
const User = require('../models/user');
router.post('/register',async(req,res) =>{
    const{ name,email,password } =req.body;
    const user=new User({name,email,password});
    await user.save();
    res.json(user);
});
const auth=require('../middleware/auth');
router.get('/user',auth,async(req,res)=>{
    try{
        const userId=req.user.id;
        const user=await User.findById(userId);
        const userName=user.name;
        res.json({name:userName});
    }catch(err){
        console.error(err.message);
        res.status(500).send('server Error');
    }
});
module.exports = router;