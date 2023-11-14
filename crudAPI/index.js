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

app.post('/',auth,(req,res)=>{
    res.send({type:"post"})
})
// view all products api
app.get('/products', (req, res) => {
    res.json(products)
})


// create post api
app.post('/products',(req,res)=>{
    console.log('>>>>>>>>>>>', req.body)
    products.push(req.body);
    res.json(req.body)
})

// update api   -->put method overwrite the content
app.put('/products/:id',(req,res)=>{
    const id = +req.params.id;
    const productIndex = products.findIndex(product=>product.id==id)
    console.log('>>>>>>>>>>>', productIndex)
    const updateprod = products.splice(productIndex,1,{...req.body, id:id});
    res.status(201).send("success in updating")
})


// update api 
app.patch('/products/:id',(req,res)=>{
    const id = +req.params.id;
    const productIndex = products.findIndex(product=>product.id==id)
    console.log('>>>>>>>>>>>', productIndex)
    const prod = products[productIndex]
    const updateprod = products.splice(productIndex,1,{...prod ,...req.body});
    res.status(201).send("success in updating")
})

// delete api 
app.delete('/products/:id',(req,res)=>{
    const id = +req.params.id;
    const productIndex = products.findIndex(product=>product.id==id)
    console.log('>>>>>>>>>>>', productIndex)
    const deletedProd = products.splice(productIndex,1);
    res.send("success in deleting")
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))