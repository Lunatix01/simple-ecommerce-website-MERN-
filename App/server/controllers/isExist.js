const mongoose = require('mongoose')
//import models
const User = require('../model/User')

const registerChecker = async(username,email) =>{
    //check if username or email exists in the database
    const Username = await User.findOne({username:username})
    const Email = await User.findOne({email:email})

    //if exists return true
    if(Email && Username) return true
    // else 
    return false
}


module.exports.registerChecker = registerChecker