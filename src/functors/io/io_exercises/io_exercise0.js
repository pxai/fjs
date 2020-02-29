import { IO } from "monet";
import { compose, curry } from "folktale/core/lambda";

const getStorageIO = (key) => IO(function() {
  return window.localStorage.get(key);
});

const map = curry(2, function(fn, obj) {
    return obj.map(fn)
});

const getColor = preferences => preferences.color;

const getBackgroundColor = compose(map(getColor), getStorageIO);

export { getStorageIO, getColor, getBackgroundColor };