const mongoose = require('mongoose')
const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        min: 6
    },
    description: {
        type: String,
        required: true,
        min: 20,
    },
    price :{
        type: Number,
        required: true,
    },
    Seller: {
        type: mongoose.Schema.Types.ObjectId,
        ref : 'User',
        required: true
    },
    image :{
        type: String,
        required: true,
        default:"user.png"
    }, 
    tags: {
        type : [], 
        required : [true , 'Please atleast add a single Tag to the product'],
    },
    quantity: {
        type: Number,
        default : 1
    },

})

module.exports = mongoose.model('Product',productSchema)