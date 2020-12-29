import EventEmitter from "events";

var url = "http://mylogger.io/log";

class Logger extends EventEmitter {
  log(message) {
    //send http request
    console.log(message);

    //Raise an event
    this.emit("messageLogged", { id: 1, url: "http://" });
  }
}

// const logger=new Logger()
// export logger
// module.export.log = log;
export default Logger;
