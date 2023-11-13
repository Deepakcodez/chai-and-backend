const express = require('express') 
const path = require('path')
const app = express()
const port = 5000

const publicPath = path.join(__dirname,'public')
console.log('>>>>>>>>>>>', publicPath)

// app.use(express.static(publicPath))

app.get('/',(req,resp)=>{
  resp.sendFile(`${publicPath}/index.html`)
})
app.get('/about',(req,resp)=>{
  resp.sendFile(`${publicPath}/about.html`)
})
app.get('*',(req,resp)=>{
  resp.sendFile(`${publicPath}/errPage.html`)
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))