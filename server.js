const http = require('http');

const server = http.createServer((req, res) => {
  // This will cause a memory leak if not handled properly
  const largeData = new Array(1024 * 1024).fill('a').join('');

  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end(largeData);
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});