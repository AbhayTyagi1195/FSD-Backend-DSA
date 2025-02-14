const http = require('http');
const fs = require('fs/promises');
const server=http.createServer(async (req,res)=>{
    res.statusCode=200;
    res.setHeader('Content-Type','text/html');
    const data=await fs.readFile("./index.html");
    res.end(data);
});
server.listen(9000,()=>{
    console.log('Server is running at http://localhost:9000');
});