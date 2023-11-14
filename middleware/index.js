const { log } = require('console');
const express = require('express')
const fs = require('fs')
const app = express()
const port = 3000
const data = JSON.parse(fs.readFileSync('data.json','utf-8'));
const products = data.products;


// middleware 
app.use((req,res,next)=>{
 console.log('>>>>>>>>>>>', req.method, req.ip, req.hostname, new Date())
 next()
})

const auth=(req,res,next)=>{
   if(req.query.password==123){
    console.log('>>>>>>>>>>>', req.query)
    next()
   }
   else{
    res.sendStatus(401)
   }
}



// api endpoint
app.get('/', auth , (req, res) => res.json(products))

app.post('/',(req,res)=>{
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