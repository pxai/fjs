import R from "ramda";

let _Maybe = function(value) {
  this.value = value;
};

const Maybe = function(x) {
  return new _Maybe(x);
};

console.log(Maybe(42)); // { value: 42 }

_Maybe.prototype.map = function(fn) {
  return this.value ? Maybe(fn(this.value)) : Maybe(null);
};

const capitalize = x => x.toUpperCase();

const result = Maybe("sample").map(capitalize);

console.log(result);

const map = R.curry(function(fn, obj) {
  return obj.map(fn);
});

const add = R.add;

Maybe(665).map(add(1)); // Maybe(666)

map(add(1), Maybe(665)); // Maybe(666)

export { Maybe, map, add };
