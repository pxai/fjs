import R from "ramda";

function toPositive(number) {
  return Math.abs(number);
}

function toInteger(whatever) {
  return +whatever;
}

// Here, replace R.identity with a composition R.compose(...)
// of the previous functions to to pass the tests
const positiveInteger = R.identity; //a => a;

export { positiveInteger };
