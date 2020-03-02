import { heroStream } from "./eventstream_exercise0";

const map = function(fn, obj) {
  return obj.map(fn);
};

const getElement = value => document.querySelector(`#${value}`);
const heroElementStream = map(getElement, heroStream);

// Impure
heroElementStream.onValue(function(element) {
  element.style.color = "orange";
});

export { heroElementStream, getElement };
