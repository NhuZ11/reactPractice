require('dotenv').config()

const express = require('express')


//Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
//express app
const app=express()

//middleware
app.use((req,res,next)=>{
    console.log(req.path, req.method)
    next()
})

//routes
app.get('/',(req,res)=>{
    res.json({msg:"Welcome to app mf" })
})

//listen for request
app.listen(process.env.PORT,()=>{
    console.log('listening to port',process.env.PORT);
})