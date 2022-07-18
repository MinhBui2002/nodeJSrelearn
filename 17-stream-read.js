const { createReadStream } = require("fs");

// default 64kb
// last buffer - remaining data
// highwater mark - how much data can be read before it is buffered
// const stream = createReadStream('./file.txt', {highWaterMark: 1});
// const stream = createReadStream('./file.txt', {highWaterMark: 2});
const stream = createReadStream("../content/big.txt", {
	highWaterMark: 10000,
	encoding: "utf8",
});

stream.on("data", (chunk) => {
	console.log(chunk);
});

stream.on('error', (err) => {
	console.log(err);
});
