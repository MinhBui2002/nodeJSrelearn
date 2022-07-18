const EventEmitter = require("events");

const customEmitter = new EventEmitter();

customEmitter.on(`response`, (name, id) => {
	console.log(`Data received: user ${name} and ${id}`);
});

customEmitter.on(`response`, () => {
	console.log(`some other data received`);
});



customEmitter.emit(`response`,'john',34);
