require('dotenv').config();
const express = require("express");
const app = express();
const port = process.env.PORT ;


// inbuilt middleware
app.use(express.json()); //parse body content
app.use(express.urlencoded()); //parse url encoded content
app.use(express.static("public"));







const productRout = require('./routes/Products.rout')
// router   middleware
app.use('/api/v1/products',productRout)




app.listen(port, () => console.log(`Example app listening on port ${port}!`));
