import R from "ramda";

const map = R.curry(function(fn, obj) {
  return obj.map(fn);
});

const chain = R.curry(function(fn, mv) {
  return mv.chain(fn);
});

const log = function (x) {
    console.log(x);
    return x;
} 

const id = function(x) {
  return x;
};

const mjoin = chain(id);

export { map, id, chain, mjoin, log };