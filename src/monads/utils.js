import R from "ramda";

const map = R.curry(function(fn, obj) {
  return obj.map(fn);
});

const chain = R.curry(function(fn, mv) {
  console.log("Lets chain: ", fn, mv);
  return mv.chain(fn);
});

const id = function(x) {
  return x;
};

const mjoin = chain(id);

export { map, id, chain, mjoin };