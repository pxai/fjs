import R from "ramda";

let _Container = function(value) {
  this.value = value;
};

const Container = function(x) {
  return new _Container(x);
};

console.log(Container(42));

_Container.prototype.map = function(fn) {
  return Container(fn(this.value));
};

const capitalize = x => x.toUpperCase();

const result = Container("sample").map(capitalize);

console.log(result);

const map = R.curry(function(fn, obj) {
  return obj.map(fn);
});

const add = R.add;

Container(665).map(add(1));

map(add(1), Container(665)); // Container(666)

export { Container, map, add };