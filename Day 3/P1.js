const http = require('http');
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    if(req.url === '/getdata' && req.method === 'GET') {
        const data = {
            name: 'John Doe',
            age: 25
        };
        res.end(JSON.stringify(data));
        return;
    }
    else if(req.url === '/setdata' && req.method === 'POST') {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });
        req.on('end', () => {
            const data = JSON.parse(body);
            console.log('Received data:', body);
            res.end(JSON.stringify({message:'Data received successfully'}));
            return;
        });
    }
});
server.listen(9000,()=>{
    console.log('Server is running on http://localhost:9000');
})