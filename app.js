const http = require('http');
const hostname = '127.0.0.1';
const portNumber = 3001;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World!');
});

server.listen(portNumber, hostname, () => {
    console.log('Server successfully running at: http://${hostname}:${port}/');
});

// enter the following url into the browser: http://localhost:3001/