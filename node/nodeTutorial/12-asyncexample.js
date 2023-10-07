const http = require('http');

//this part is asynchronous it will console log everytime a request has been made to the server
const server=http.createServer((req,res)=>{
    console.log("Request event");
    res.end("Hello world");
})


//this will be console logged first
server.listen(5000,()=>{
    console.log("Sever is listening on 5000");
})