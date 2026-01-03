const http = require('http');
var url = require('url');

const server = http.createServer(function (request, response) {

    let requestUrl = request.url;  
    let queryParams = url.parse(requestUrl, true).query;  

    response.writeHead(200, { 'Content-Type': 'text/html' });

    console.log(request.headers);
    if (queryParams.fName !=" ") {
        response.write("<h1>" + queryParams.fName + "</h1>");
         response.write("<h1>" + queryParams.lName + "</h1>");
    } else {
        response.write(JSON.stringify({ message: "Hello" }));
    }

    response.end();

});

server.listen(8080, () => {
    console.log('Server is running on http://localhost:8080');
});

