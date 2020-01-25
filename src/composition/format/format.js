import R from "ramda";

function toLowercase(words) {
  return words.toLowerCase();
}

function firstToUpper(words) {
  return words.charAt(0).toUpperCase() + words.slice(1);
}

function removeQuotes(words) {
  return words.replace(/"/g, "");
}

// Here, replace R.identity with a composition R.compose(...)
// of the previous functions to to pass the tests
const format = R.identity; //a => a;

export { format };
