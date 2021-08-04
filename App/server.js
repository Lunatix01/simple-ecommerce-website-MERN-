// Libs
require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const next = require('next')
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })

//handler
const handle = app.getRequestHandler()
// PORT
const PORT = 8000;

app.prepare().then(() =>{
    const server = express()
    // import routes
    const userRoute = require('./server/routes/user')
    const product = require('./server/routes/product')
    const review = require('./server/routes/review')
    // Middlewares
    server.use(express.json())

    // setup routes
    server.use('/api/auth', userRoute)
    server.use('/api/product', product)
    server.use('/api/review', review)

    server.all('*', (req, res) => {
        return handle(req, res)
    })


    // connect to db
    mongoose.connect(process.env.DB_URL,{useNewUrlParser: true, useUnifiedTopology:true},()=>{
        console.log('connected to the Database')
    })


    // server listener
    server.listen(PORT,()=>{
        console.log('connected to the web server on port 8000')
    })
}).then(() => console.log(`> Running on http://localhost:${PORT}`))
    .catch(err => {
        console.error(`Server failed to start: ${err.stack}`);
        process.exit(1);
    });