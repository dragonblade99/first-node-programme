var url = "http://mylogger.io/log";

function log(message) {
  //send http request
  console.log(message);
}
// module.export.log = log;
export default log;
