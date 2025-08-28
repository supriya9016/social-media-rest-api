const express = require('express');
const router =express.Router();
const auth = require('../middleware/auth');
const {check,validationResult} =require('express-validator');
const Post=require('../models/posts');
router.post('/posts',[auth,[check('title','Title is required').not().isEmpty(),check('description','Description is Required').not().isEmpty()]],
async(req,res)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(422).json({message: 'Invalid inputs'});
    }
    try{
        const post=new Post({
            title:req.body.title,
            description:req.body.description,
            author: req.user.id

        });
        await post.save();
        res.json({
            id:post.id,
            title:post.title,
            description:post.description,
            createdAt:post.createdAt
        });
    }catch(err){
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});
router.delete('/posts/:id',auth,async(req,res)=>{
    try{
        const post=await Post.findOne({_id: req.params.id,author: req.user.id});
        if(!post){
            return res.status(404).json({message:'post Not found'});
        }
        await Post.deleteOne({_id:req.params.id});
        res.status(200).json({message:'Post deleted'});
    }catch(err){
        console.error(err.message);
        res.status(500).send('server Error');
    }
});
module.exports=router;
