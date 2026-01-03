// const http = require('http');
// http.createServer((req,res)=>{
//     res.writeHead(200,{'content-type':'text/html'});
//     res.end("hello from node js server!!!/n");
//     server.listen(8080);
// })
const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type':'text/html'});
    res.end("hello from node js server!!!\n");
});

server.listen(8080, () => {
    console.log("Server listening on port 8080");
});
