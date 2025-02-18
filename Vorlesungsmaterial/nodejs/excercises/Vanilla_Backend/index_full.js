const http = require('node:http');
const { URL } = require('url');

const hostname = '127.0.0.1';
const port = 3000;
const origin = `http://${hostname}:${port}`;

const server = http.createServer((req, res) => {

  const url = new URL(req.url, origin);
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  const parsedUrl = url.parse(req.url, true);
  const queryParams = parsedUrl.query;
  res.end(JSON.stringify({ queryParameters: queryParams }, null, 2));
});

server.listen(port, hostname, () => {
  console.log(`Server running at ${origin}`);
});