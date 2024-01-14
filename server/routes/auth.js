const express = require('express')
const router = express.Router()
const User = require('../models/user')

// Register route
router.post('/register', async (req, res) => {
    try{
        const {name, userID, email, password} = req.body

        // Check if user already exists
        const existingUser = await User.findOne({
            $or: [ {userID}, {email} ]
        })
        if(existingUser){
            return res.status(409).json({message: 'User Already Exists'})
        }

        // Create new user
        const newUser = new User({name, userID, email, password})
        await newUser.save()
        res.status(201).json({message: 'User Successfully Registered'})

    }catch(error){
        console.log('Error ==>', error)
        res.status(500).json({message: 'Internal server Error'})
    }
})

router.post('/login', async (req, res) => {
    try{
        const {id, password} = req.body

        //find user
        const user = await User.findOne({$or:[{userID : id},{email : id}]})

        if(!user){
            return res.status(404).json({message: 'User not found'})
        }

        if(user.password !== password){
            return res.status(404).json({message: 'Invalid Credentials'})
        }

        res.status(200).json({message: 'Login Successful'})
    }catch(error){
        console.log("ERROR APEARED IN SEARCH ==> ",error)
        res.status(500).json({message: 'Internal Server Error'})
    }
})

module.exports = router