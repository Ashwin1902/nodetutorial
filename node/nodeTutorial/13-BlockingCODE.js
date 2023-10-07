//because of a blocking code like a nested for loop, it can cause delay in server, not just in about page but in all pages,this is why async code is better


const http = require('http');

const server=http.createServer((req,res)=>{
    
    if(req.url=='/'){
        res.end("Home page");
    }

    else if(req.url=='/about'){
       
        //Blocking code
        for(let i=0;i<1000;i++){
        for(let j=0;j<1000;j++){
           console.log(`${i} ${j}`);
        }
    }

    res.end("About us");
    }
    
    else{
    res.end("Error page");
    }
})

server.listen(5000,()=>{
    console.log("Server is listening on port 5000");
})