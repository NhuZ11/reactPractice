const express=require('express')
const Workout = require('../models/WorkoutModel')
const router=express.Router()

router.get('/',(req,res)=>{
    res.json({msg: 'get all workouts'})
})

//get a single workout
router.get('/:id',async (req,res)=>{
    res.json({msg: 'get single workout'})
})

//post a new workout
router.post('/',async (req,res)=>{
    const {title, load, reps} = req.body

    try{
        const workout = await Workout.create(title, load, reps)
        res.status(200).json(workout)
    }catch(error){
        res.status(400).json({error: error.message})
    }
    res.json({msg: 'post a newworkout'})
})

//delete a workout
router.delete('/:id',(req,res)=>{
    res.json({msg: 'delete a workout'})
})

//update a workout
router.patch('/:id',(req,res)=>{
    res.json({msg: 'update a workout'})
})

module.exports=router