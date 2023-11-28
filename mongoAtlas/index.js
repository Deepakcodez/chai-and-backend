require('dotenv').config();
const express = require("express");
const app = express();
const mongoose = require('mongoose')
const port = process.env.PORT ;


//db connection
connectDB().catch(err=>console.log('>>>>>>>>>>>', err))

async function connectDB(){
    // mongo local connection 
    await mongoose.connect('mongodb://127.0.0.1:27017/Ecommerce');
    console.log('>>>>>>>>>>>', "db connected")
}

// inbuilt middleware
app.use(express.json()); //parse body content
app.use(express.urlencoded()); //parse url encoded content
app.use(express.static("public"));







const productRout = require('./routes/Products.rout');
// router   middleware
app.use('/api/v1/products',productRout)




app.listen(port, () => console.log(`Example app listening on port ${port}!`));
