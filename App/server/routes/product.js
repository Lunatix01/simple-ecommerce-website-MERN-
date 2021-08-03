const express = require('express')
const router = express.Router()

// import models
const Product = require('../model/Product')

//middleware
const { verify } = require('../middlewares/jwt')
const pagination  = require('../middlewares/pagination')
router.use('*',verify)

// get all products
router.get('/all', pagination(Product) , async (req,res) =>{
    try{
        res.json(res.paginatedResults)
    }
    catch(e) {
        res.json(e)
    }
})

// get a product
router.get('/:id', async (req,res) =>{
    const { id } = req.params
    try {
        const getProduct = await Product.findById(id,'-__v').populate('Seller', 'image username').lean()
        console.log(getProduct)
        if(getProduct) res.json(getProduct)
        res.status(404).json( { message: "Product not found" } )
    }
    catch(e) {
        res.json(e)
    }

})
// create products
router.post('/',async (req,res) =>{
    const { title, description, price } = req.body
    
    //validation
    title && description && price ? console.log('validation gud'): res.json({message:"please fill everything "})
    
    // adding product
    const product = new Product({
        title: title,
        description: description,
        price: price,
        Seller: req.id
    })
    try{
        const checker = await Product.findOne(product)
        if(checker) res.json({message : ' product is already exist '})
        const saveProduct = await product.save()
        console.log(saveProduct)
    }
    catch(e){
        console.log(e)
    }

    res.status(201).json({message: 'Your Product has been created <3'})
})

// update a Product
router.patch(('/:id'),async(req,res)=>{
    const {id} = req.params
    const query = {
        _id: id,
        Seller: req.id
    }
    const updates = req.body
    console.log(query)
    try{
        if(id){
            const data = await Product.findOneAndUpdate(query,updates,{useFindAndModify: false})
            console.log(data)
    }
    else{
        res.json(
            {message:"Please choose a product"})
    }
    res.json({message : "done"})
    }
    catch(e){
        res.json(e)
    }
})

// Delete a Product

router.delete(('/:id'), async (req,res) =>{
    const { id } = req.params
    const query = {
        _id : id,
        Seller: req.id
    }
    try{
        const DeleteProduct = await Product.findOneAndRemove(query,{useFindAndModify: false})
        
        if(DeleteProduct) res.status(201).json({message:"Product has been Deleted"})

        res.status(404).json( { message: "Product is not found" } )
        
    }
    catch(e){
        res.json( {message: e} )
    }
})

module.exports = router