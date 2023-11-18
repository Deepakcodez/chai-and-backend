const { log } = require('console');
const express = require('express')
const fs = require('fs')
const app = express()
const port = 8000
const data = JSON.parse(fs.readFileSync('data.json','utf-8'));
const products = data.products;

// innuilt middleware 
app.use(express.json())  //parse body content
app.use(express.urlencoded())  //parse url encoded content
app.use(express.static('public'))

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
// veiw prod by id 
app.get('/products/:id', (req, res) => {
    const id = req.params.id;
    console.log('>>>>>>>>>>>', id)
    const product = products.find((product)=>product.id==id)
    console.log('>>>>>>>>>>>', product)
    res.json(product)
})

// view all products api
app.get('/products', (req, res) => {
    res.json(products)
})

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