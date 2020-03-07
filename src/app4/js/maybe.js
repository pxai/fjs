import R from "ramda";

let _Maybe = function(value) {
  this.value = value;
};

const Maybe = function(x) {
  return new _Maybe(x);
};

_Maybe.prototype.map = function(fn) {
  return this.value ? Maybe(fn(this.value)) : Maybe(null);
};

export { Maybe };
