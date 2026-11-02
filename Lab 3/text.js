const http = require('http');
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('My first page\n');
    res.write('My second page\n'); 
    res.write('My third page\n');
    res.write('My fourth page\n');
    res.end('This is my page\n');
});
server.listen(4000, () => console.log('server running at http://localhost:4000'));