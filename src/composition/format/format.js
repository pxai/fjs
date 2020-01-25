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

const format = R.compose(
    firstToUpper,
    toLowercase,
    removeQuotes
);

export { format };
