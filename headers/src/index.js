const http = require('http');
const server = http.createServer((req,res)=>{

    let data = {x:5};

    console.log('>>>>>>>>>>>', req.url)
    console.log('>>>>>>>>>>>', "server started")

    // resp.end(JSON.stringify({
    //     message:"hello world"
    // }))
    res.setHeader('Content-Type', 'text/html');
    res.setHeader('demo','demoThing')
    // res.setHeader('Content-Type','application/json')
    // res.end(JSON.stringify(data))
    res.setHeader('Content-Type','text/html')
    res.end('index');
})

server.listen(5000, () => {
    console.log('Server is listening on port 5000');
});