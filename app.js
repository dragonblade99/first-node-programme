// import log from "./logger.js";
// log("message");

// const os = require("os");

// import os from "os";

// var totalMemory = os.totalmem();
// var freeMemory = os.freemem();

// console.log(`Total memory:${totalMemory}`);
// console.log(`Free memory:${freeMemory}`);

import fs from "fs";
// const files = fs.readdirSync("./");
// console.log(files);

fs.readdir("./", function (err, files) {
  if (err) console.log("error", err);
  else console.log("result", files);
});
