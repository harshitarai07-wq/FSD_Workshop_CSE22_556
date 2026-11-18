/*Q3. (HTTP Server)
Create a simple HTTP server for a tea stall. When someone visits the server, it should show the message "Welcome to NodeJS!" 
along with a status code 200.*/

const http = require('http');

// Create HTTP server
const server = http.createServer((req, res) => {

    // Set status code
    res.statusCode = 200;

    // Set response header
    res.setHeader('Content-Type', 'text/plain');

    // Send response message
    res.end('Welcome to NodeJS!');

});

// Start the server
server.listen(3000, () => {
    console.log('Tea stall server is running at http://localhost:3000');
});
