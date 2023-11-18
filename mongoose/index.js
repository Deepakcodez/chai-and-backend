require('dotenv').config();
const express = require("express");
const app = express();
const mongoose = require('mongoose')
const port = process.env.PORT ;
const productRouter = require('./router/product')


// innuilt middleware
app.use(express.json()); //parse body content
app.use(express.urlencoded()); //parse url encoded content
app.use(express.static("public"));

// middleware
app.use((req, res, next) => {
  console.log(">>>>>>>>>>>", req.method, req.ip, req.hostname, new Date());
  next();
});

// taking data through body but express wont alow to read body data so we need express moddleware
const auth = (req, res, next) => {
  if (req.body.password === "123") {
    console.log("Authentication successful");
    next();
  } else {
    console.log("Authentication failed");
    res.sendStatus(401);
  }
};

// router   middleware
app.use('/products',productRouter.router)





app.listen(port, () => console.log(`Example app listening on port ${port}!`));
