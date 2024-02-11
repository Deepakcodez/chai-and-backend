const express = require('express')
const http = require('http').Server(express)
const port = 3000

http.get('/', (req, res) => res.send('Hello World!'))
http.listen(port, () => console.log(`Example app listening on port ${port}!`))