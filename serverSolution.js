const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  // Stream the large data instead of loading it all into memory
  const stream = fs.createReadStream('largefile.txt'); // Replace with your actual large file
  stream.pipe(res);
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});
// Create a dummy large file for testing
fs.writeFileSync('largefile.txt', new Array(1024 * 1024).fill('a').join(''), 'utf8');