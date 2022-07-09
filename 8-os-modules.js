const os = require("os");
// method returns the uptime of the system in hours
console.log(`The uptime of the system is ${os.uptime() / 3600} hours`); 
const currentOS = {
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem()
}
console.log(currentOS);
