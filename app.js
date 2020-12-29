// import log from "./logger.js";
// log("message");

// const os = require("os");

// import os from "os";

// var totalMemory = os.totalmem();
// var freeMemory = os.freemem();

// console.log(`Total memory:${totalMemory}`);
// console.log(`Free memory:${freeMemory}`);

// import fs from "fs";
// // const files = fs.readdirSync("./");
// // console.log(files);

// fs.readdir("./", function (err, files) {
//   if (err) console.log("error", err);
//   else console.log("result", files);
// });

// import EventEmitter from "events";
// const emitter = new EventEmitter();

// //regester an event
// emitter.on("messageLogged", (arg) => {
//   console.log("listner called", arg);
// });

// //Raise an event
// emitter.emit("messageLogged", { id: 1, url: "http://" });

// import EventEmitter from "events";
// import Logger from "./logger.js";
// const logger = new Logger();

// //regester an event
// logger.on("messageLogged", (arg) => {
//   console.log("listner called", arg);
// });

// logger.log("message");

import http from "http";

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.write("hello world");
    res.end();
  }
  if (req.url === "/api/courses") {
    res.write(JSON.stringify([1, 2, 3]));
    res.end();
  }
});

server.listen(3000);

console.log("listening on port 3000...");
