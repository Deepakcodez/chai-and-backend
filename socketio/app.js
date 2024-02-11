const { log } = require('console');
const express = require('express');
const path = require('path');
const app = express();
const http = require('http').Server(app)
const port = 3000;




const io = require('socket.io')(http)

app.get('/', (req, res) => {
var option = {
    root :  path.join(__dirname)
}
   var fileName = 'index.html';

    res.sendFile(fileName,option);
})

    
// socket code 

 io.on('connection',(socket)=>{
    console.log('>>>>>>>>>>>user connected')

    socket.on('disconnect',()=>{
        console.log('>>>>>>>>>>>user disconnected')
    })
 })



http.listen(port, () => console.log(`Example app listening on port ${port}!`))