import R from "ramda";

function discount(percent, prize) {
  return prize * (percent / 100);
}

const curriedDiscount = R.curry(discount);

const discount10Percent = curriedDiscount(10);

export { discount10Percent };
