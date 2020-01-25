import R from "ramda";

function addPrefix(msg) {
  return "Log> " + msg;
}

function addDate(msg) {
  return new Date().toUTCString() + " " + msg;
}

function addSuffix(msg) {
  return msg + ".";
}

// Here, replace R.identity with a composition R.compose(...)
// of the previous functions to to pass the tests
const logger = R.identity; //a => a;

export { logger };
