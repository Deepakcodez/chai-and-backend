const express = require('express') 
const path = require('path')
const app = express()
const port = 5000

const publicPath = path.join(__dirname,'public')
console.log('>>>>>>>>>>>', publicPath)

app.use(express.static(publicPath))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))