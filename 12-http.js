// create a http server
const http = require("http");

const server = http.createServer((req, res) => {
	if (req.url === "/") {
		res.end("This is the home page");
	}
	if (req.url === "/about") {
		res.end("This is the about page");
	}
	res.end(
		`<h1>Oops, page not found</h1>
        <p>Please go back to the <a href="/">home page</a></p>`
	)
});

server.listen(3000, () => {
	console.log("Server is listening on port 3000");
});
