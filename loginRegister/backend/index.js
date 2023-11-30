const express = require('express')
const cors = require('cors')
const app = express()
const port = 8000
const db = require('./utils/db.connection')
db.connectDB;

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))