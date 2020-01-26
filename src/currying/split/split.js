import R from "ramda";

function split(separator, message) {
  return message.split(separator);
}

const curriedSplit = R.curry(split);

const words = curriedSplit(" ");

export { words };
