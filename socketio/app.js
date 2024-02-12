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
let user = 0;

 io.on('connection',(socket)=>{
    console.log('>>>>>>>>>>>user connected')
    user++ ;

    //we can also emit event from client side and consume at server side or vice versa
    //custom events
    socket.emit('myEvent', "this is data, you can also pass object")

    //consuming event 
    socket.on('eventFromClient',(data)=>{
        console.log('>>>>>>>>>>>', data)
    })




    //broadcast 

    //globally
    // io.sockets.emit  emit message for everyone including  self also

    //code
    // io.sockets.emit("broadcast" , `${user} active now`)



    //socket.broadcast.emit  emit message for all except self
    socket.emit("newUserConnected", `welcome user`)
    socket.broadcast.emit("newUserConnected", `${user} active now`)






    socket.on('disconnect',()=>{
        console.log('>>>>>>>>>>>user disconnected')
        user--;
        // io.sockets.emit("broadcast", `${user} active now`)
        socket.broadcast.emit("newUserConnected", `${user} active now`)

    })

 })



http.listen(port, () => console.log(`Example app listening on port ${port}!`))