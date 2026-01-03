const h = require('http');
const u = require('url');
const server = h.createServer((req,res)=>{
    console.log("path",req.url.pathname);
    const baseUrl = 'https://'+req.headers.host+"/";
    const parsedUrl = new URL(req.url,baseUrl);
    console.log(parsedUrl.pathname); 
    let querydata = u.parse(req.url,true);
    console.log(querydata);
    console.log(req.method);
    let f = req.method;
    res.write('<h1>'+f+'</h1>');
    if(f==='GET')
    {
        console.log("method get");
         res.write('<h3>'+f+'</h3>');
    }
    res.end();
}).listen(3000,()=>{
    console.log("server started...");
})
