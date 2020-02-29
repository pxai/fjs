import { IO } from "monet";
import { compose, curry } from "folktale/core/lambda";

const getValueIO = (input) => IO(function() {
  return document.querySelector(input).value;
});

const toString = (value) => {
    return JSON.stringify(value)
}

const saveStorageIO = (value) => IO(function() {
  return window.localStorage.set("property", value);
});

const map = curry(2, function(fn, obj) {
    return obj.map(fn)
});

const saveValueFromInput = compose(map(saveStorageIO), map(toString), getValueIO);

export { getValueIO, toString, saveStorageIO, saveValueFromInput };