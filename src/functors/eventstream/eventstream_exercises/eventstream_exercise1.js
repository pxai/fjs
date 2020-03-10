import { map } from "../eventstream";
import { heroStream } from "./eventstream_exercise0";


const getElement = value => document.querySelector(`#${value}`);
// applying map to getElement and heroStream,
// create a function that returns a stream of hero elements
const heroElementStream = map(getElement, heroStream);

// Impure
// add some code to change hero element text to orange
// with element.style.color
heroElementStream.onValue(function(element) {
  element.style.color = "orange";
});

export { heroElementStream, getElement };
