const express = require('express')
const cors = require('cors')
const app = express()
const port = 8000
const db = require('./utils/db.connection')
db.connectDB;


// middlewares 
app.use(express.json()); //parse body content
app.use(express.urlencoded()); //parse url encoded content


// routes 
const user = require('./router/user.rout')
app.use('/api/v1/user',user)


app.listen(port, () => console.log(`Example app listening on port ${port}!`))