const http = require('http');
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'students.json');


if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, '[]', 'utf8');
}

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', '*');

    if (req.method === 'OPTIONS') {
        res.writeHead(204, { 'Access-Control-Allow-Methods': 'GET, POST' });
        res.end();
        return;
    }

    if (req.url === '/getdata' && req.method === 'GET') {
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                res.writeHead(500);
                res.end(JSON.stringify({ error: 'Error reading data' }));
                return;
            }
            res.writeHead(200);
            res.end(data);
        });
        return;
    }

    else if (req.url === '/setdata' && req.method === 'POST') {
        let body = '';

        req.on('data', chunk => {
            body += chunk;
        });

        req.on('end', () => {
            try {
                const newData = JSON.parse(body);
                fs.readFile(filePath, 'utf8', (err, data) => {
                    if (err) {
                        res.writeHead(500);
                        res.end(JSON.stringify({ error: 'Error reading data' }));
                        return;
                    }

                    const users = JSON.parse(data);
                    users.push(newData);

                    fs.writeFile(filePath, JSON.stringify(users, null, 2), 'utf8', (err) => {
                        if (err) {
                            res.writeHead(500);
                            res.end(JSON.stringify({ error: 'Error saving data' }));
                            return;
                        }
                        res.writeHead(201);
                        res.end(JSON.stringify({ message: 'Data saved successfully' }));
                    });
                });
            } catch (error) {
                res.writeHead(400);
                res.end(JSON.stringify({ error: 'Invalid JSON format' }));
            }
        });

        return;
    }

    res.writeHead(404);
    res.end(JSON.stringify({ error: 'Not Found' }));
});

server.listen(9000, () => {
    console.log('Server is running at http://localhost:9000');
});