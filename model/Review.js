const mongoose = require('mongoose')

const reviewSchema = new mongoose.Schema({
    title: {
        type: String,
        required : true
    },
    body: {
        type: String,
    },
    postedBy : {
        type : mongoose.Schema.Types.ObjectId,
        Required : true,
        ref : 'User'
    },
    product : {
        type : mongoose.Schema.Types.ObjectId,
        required : true,
        ref : 'Product'
    }
    ,
    isPositive: {
        type : Boolean,
        required : true
    }
})

module.exports = mongoose.model('Review', reviewSchema)