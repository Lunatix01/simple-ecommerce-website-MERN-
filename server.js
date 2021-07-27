// Libs
require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const app = express()

// import routes
const userRoute = require('./routes/user')
const product = require('./routes/product')
const review = require('./routes/review')
// Middlewares
app.use(express.json())

// setup routes
app.use('/api/auth', userRoute)
app.use('/api/product', product)
app.use('/api/review', review)

app.get('/',(req,res) =>{
    res.send('hit')
})


// connect to db
mongoose.connect(process.env.DB_URL,{useNewUrlParser: true, useUnifiedTopology:true},()=>{
    console.log('connected to the Database')
})


// server listener

app.listen(5000,()=>{
    console.log('connected to the web server on port 5000')
})