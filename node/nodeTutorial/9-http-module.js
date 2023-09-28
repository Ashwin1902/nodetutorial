const http = require('http');

// const server=http.createServer((req,res)=>{
//     console.log(req);
//     res.write('Welcome');
//     res.end();
// })

const server=http.createServer((req,res)=>{
    if(req.url==='/'){
        res.end('welcome');
    }
    if(req.url==='/about'){
        res.end('Our history');
    }
    res.end(`
      <h1>OOPS!</h1>
      <p>some error</p>
      <a href="/">Back home</a>
    `)
})

server.listen(5000);