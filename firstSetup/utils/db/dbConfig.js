const mongoose = require('mongoose')
const db = "mongodb://127.0.0.1:27017/first"
mongoose.connect((db)).then(()=>{
    console.log('mongoDB connected');
}).catch(err=>{
    console.log("err",err);
})