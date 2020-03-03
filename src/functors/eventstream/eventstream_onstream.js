import { idStream, map } from "./eventstream";

// anotherStream
const elementStream = map(function(id) {
  return document.querySelector(id);
}, idStream);

// impure ahead
elementStream.onValue(function(element) {
  console.log("Inner is: ", element.innerHTML);
});

export { elementStream };