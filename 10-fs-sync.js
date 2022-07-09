const { readFileSync, writeFileSync } = require("fs");
console.log("Start");
// decode the first.txt file with utf8
const first = readFileSync("./content/first.txt", "utf8");
// decode the second.txt file with utf8
const second = readFileSync("./content/second.txt", "utf8");
// create the new file with the content of the first.txt file and second.txt file
writeFileSync(
	"./content/result-sync.txt",
	`Here is the result of the two files: ${first} and ${second}`,
	"utf8"
);
// append the content of the second.txt file to the result-sync.txt file
// writeFileSync("./content/result-sync.txt", `${second}`, { flag: "a" });
console.log("End");
console.log('Start the next one');
