const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')
//import controllers
const {hash,compareHashes} = require('../controllers/hashing')
const {registerVal} = require('../controllers/validation')
const {registerChecker} = require('../controllers/isExist')

// import middleware
const {verify} = require('../middlewares/jwt')
//import models
const User = require('../model/User')


router.post('/register',async(req,res)=> {
    // validate datas
    const {error,value} = registerVal(req.body)

    // response if we have an error on validation
    if(error) return res.json(error.details[0].message)
    
    // hashing password
    const hashedPassword = await hash(value.password)

    //check if email or username exists
    const isExist = await registerChecker(value.username,value.email)
    if(isExist) return res.status(400).json({message: "email or username already exists"})
    // saving to database
    const user = new User({
        username: value.username,
        email : value.email,
        password: hashedPassword,
    })
    const token = jwt.sign({username: value.username,id:value.id},process.env.TOKEN,{ expiresIn: '30mins' })
        
    try{
        const savedUser = await user.save()
        
        res.header('auth-token',token).json({message:`${value.username}'s account has been created`})
    }
    catch(err){
        res.status(400).json({message:err})
    }
    
})

router.post('/login', async(req,res) =>{
    const email = await User.findOne({
        email:req.body.email,
    })
    if(!email) return res.status(400).json({message:"email or password is wrong"})  
    const match = await compareHashes(req.body.password,email.password)
    console.log(match)
    if(!match) return res.status(400).json({message:"email or password is wrong"})
    const token = jwt.sign({username: email.username,id:email.id},process.env.TOKEN,{ expiresIn: '30mins' })
    res.json({message:"logged in",token:token})
})


module.exports = router