const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;
const origin = `http://${hostname}:${port}`;

const server = http.createServer((req, res) => {
    const parsedUrl = new URL(req.url, origin);
    const queryParams = Object.fromEntries(parsedUrl.searchParams);
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ queryParameters: queryParams }, null, 2));
});

server.listen(port, hostname, () => {
    console.log(`Server running at ${origin}`);
});
