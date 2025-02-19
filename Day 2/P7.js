const http = require('http');
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    if(req.url === '/'){
        res.end("Welcome to home page");
    }
    else if (req.url === '/about'){
        res.end("Welcome to about page");
    }
    else if (req.url === '/contact'){
        res.end("Welcome to contact page");
    }
    else{
        res.end("page not found");
    }
})
server.listen(9000, () => {
    console.log("Server is running at http://localhost:9000");
})