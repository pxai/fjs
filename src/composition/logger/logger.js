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

const logger = R.compose(
    addPrefix,
    addDate,
    addSuffix
);

export { logger };
