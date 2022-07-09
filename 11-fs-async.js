const { readFile, writeFile } = require("fs");


console.log("Start");
readFile("./content/first.txt", "utf8", (err, data) => {
	if (err) {
		console.log(err);
		return;
	}
	const first = data;
	readFile("./content/second.txt", "utf8", (err, data) => {
		if (err) {
			console.log(err);
			return;
		}
		const second = data;
		writeFile(
			"./content/result-async.txt",
			`Here is the result: ${first}, ${second}`,
			(err,result) => {
				if (err) {
					console.log(err);
					return;
				}
				console.log('Done with async');
			}
		);
	});
});
console.log("Start the next one");
