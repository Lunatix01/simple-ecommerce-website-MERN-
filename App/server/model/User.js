const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    username: {
        type : String,
        required: true,
        max : 30
    },
    email: {
        type: String,
        required: true,
        min : 7,
    },
    password: {
        type : String,
        required: true,
        min: 8,
        max: 1024
    },
    Products:   {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
    },
    date :{
        type: Date,
        default : Date.now
    },
    image: {
        type: String,
        default: "user.png",
    }

})

module.exports  = mongoose.model('User',userSchema)