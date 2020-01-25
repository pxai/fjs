import R from "ramda";

function toPositive(number) {
  return Math.abs(number);
}

function toInteger(whatever) {
  return +whatever;
}

const positiveInteger = R.compose(
    toPositive,
    toInteger
);

export { positiveInteger };
