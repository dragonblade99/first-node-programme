// import log from "./logger.js";
// log("message");

// const os = require("os");

import os from "os";

var totalMemory = os.totalmem();
var freeMemory = os.freemem();

console.log(`Total memory:${totalMemory}`);
console.log(`Free memory:${freeMemory}`);
