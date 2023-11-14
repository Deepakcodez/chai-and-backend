const { log } = require('console');
const express = require('express')
const fs = require('fs')
const app = express()
const port = 8000
const data = JSON.parse(fs.readFileSync('data.json','utf-8'));
const products = data.products;

app.use(express.json())
app.use(express.urlencoded())

// middleware 
app.use((req,res,next)=>{
 console.log('>>>>>>>>>>>', req.method, req.ip, req.hostname, new Date())
 next()
})


// auth middleware for auth in which send data throug query
// const auth=(req,res,next)=>{
//    if(req.query.password==123){
//     console.log('>>>>>>>>>>>', req.query)
//     next()
//    }
//    else{
//     res.sendStatus(401)
//    }
// }

// taking data through body but express wont alow to read body data so we need express moddleware
const auth = (req, res, next) => {
    if (req.body.password === '123') {
       console.log('Authentication successful');
       next();
    } else {
       console.log('Authentication failed');
       res.sendStatus(401);
    }
 };
 



// api endpoint
app.get('/',auth,  (req, res) => {
    res.json(products)})

app.post('/',auth,(req,res)=>{
    res.send({type:"post"})
})
app.put('/',(req,res)=>{
    res.send({type:"put"})
})
app.patch('/',(req,res)=>{
    res.send({type:"patch"})
})
app.delete('/',(req,res)=>{
    res.send({type:"delete"})
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))