// make a http server that listens on port 5000
// when a request is received, send a response with the request body
const http = require('http');

// using the http module to create a server
// const server = http.createServer((req, res) => {
// 	res.end('Welcome');
// })

// using Event Emitter API
const server = http.createServer();
// emits request event when a request is received
// subscribe to request event/listen to request event/respond to request event
server.on('request', (req, res) => {
	res.end('Welcome');
});

server.listen(5000);	