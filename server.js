const express = require('express');
const app=express();
require('dotenv').config();
const port=process.env.PORT || 3000;
const connectDB =require('./db');
app.use(express.json());
const userRouter = require('./routes/users');
app.use('/api',userRouter);
const authRouter = require('./routes/auth');
app.use('/api', authRouter);
require('dotenv').config();
connectDB();
app.listen(port,()=>{
    console.log(`server started on port ${port}`);
});
const postRouter=require('./routes/posts');
app.use('/api',postRouter)
module.exports = app;