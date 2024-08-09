const express=require('express')
const {
    createWorkout,
    getWorkouts,
    getWorkout
} = require('../controllers/workoutController')

const router=express.Router()

router.get('/',(req,res)=>{
    res.json({msg: 'get all workouts'})
})

//get a single workout
router.get('/:id',async (req,res)=>{
    res.json({msg: 'get single workout'})
})

//post a new workout
router.post('/',createWorkout)

//delete a workout
router.delete('/:id',(req,res)=>{
    res.json({msg: 'delete a workout'})
})

//update a workout
router.patch('/:id',(req,res)=>{
    res.json({msg: 'update a workout'})
})

module.exports=router