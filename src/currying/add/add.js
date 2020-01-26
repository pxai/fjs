import R from "ramda";

function add(a, b) {
  return a + b;
}

const curriedAdd = R.curry(add);

const increment = curriedAdd(1);

export { increment };
