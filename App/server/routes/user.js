const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')
//import controllers
const {hash,compareHashes} = require('../controllers/hashing')
const {registerVal} = require('../controllers/validation')
const {registerChecker} = require('../controllers/isExist')

// import middleware
const { verify } = require('../middlewares/jwt')
//import models
const User = require('../model/User')

// Register a User
router.post('/register', async(req,res)=> {
    // validate datas
    const {error,value} = registerVal(req.body)

    // response if we have an error on validation
    if(error) return res.json(error.details[0].message)
    
    // hashing password
    const hashedPassword = await hash(value.password)

    //check if email or username exists
    const isExist = await registerChecker(value.username,value.email)
    if(isExist) return res.status(205).json({message: "email or username already exists"})
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

// login to an existing account 
router.post('/login', async(req,res) =>{
    // searchin in the database
    const email = await User.findOne({
        email:req.body.email,
    })
    // if email doesnt exist
    if(!email) return res.status(205).json({message:"email or password is wrong"})  
    // check if password matches
    const match = await compareHashes(req.body.password,email.password)
    // response
    if(!match) return res.status(205).json({message:"email or password is wrong"})
    // signing JWT 
    const token = jwt.sign( { username: email.username,id:email.id } ,process.env.TOKEN ,{ expiresIn: '30mins' })
    // response with JWT 
    res.status(201).json( { message:" logged in ", token : token } )
})

//
router.post('/checkjwt', verify , ( req , res ) => {
    res.status(201).json( { message: "token is valid" } )
})

module.exports = router