const express = require('express')
const router = express.Router()

// import models
const Review = require('../model/Review')

// import middleware
const { verify } = require('../middlewares/jwt')
// middlewares
router.use('*', verify)

// get all Reviews 

router.get('/all' , async (req,res) => {
    try {
        const all = await Review.find({}, '-__v').populate('product', '_id title').populate('postedBy', '_id username').lean()
        res.json(all)
    } catch (error) {
        res.json(error)
    }
})


// Add a Review

router.post('/', async (req,res) => {
    const { title , body , product , isPositive } = req.body
    title && body && product ? console.log('true') : res.json({message : "please fill all"})
    try {
        const aReview = new Review({
            title: title,
            body: body,
            product: product,
            isPositive: isPositive,
            postedBy: req.id
        })
        const savedReview = await aReview.save()
        if (savedReview) res.json({ message: 'successfuly added a Review to the product'})
        console.log(savedReview)
    } catch (error) {
        res.json({error})
    }

})

// Update a Review 

router.patch('/:id', async (req,res) =>{
    const { id } = req.params
    const updates = req.body
    const query = {
        _id : id,
        postedBy : req.id
    }
    try {
        if (id) {
            const updated = await Review.findOneAndUpdate( query, updates, { useFindAndModify: false } ) 
            console.log("okkk" + updated)
        }
        
        res.json({message : " review is been updated"})

    } catch (error) {
        res.json(error)
    }
})


module.exports = router