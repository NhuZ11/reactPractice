require('dotenv').config()

const express = require('express')
const workoutRoutes= require('../backend/routes/work')

//Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
//express app
const app=express()

//middleware
app.use(express.json())

app.use((req,res,next)=>{
    console.log(req.path, req.method)
    next()
})

//routes
// app.get('/',(req,res)=>{
//     res.json({msg:"Welcome to app mf" })
// })

app.use('/api/workouts',workoutRoutes)

//listen for request
app.listen(process.env.PORT,()=>{
    console.log('listening to port',process.env.PORT);
})