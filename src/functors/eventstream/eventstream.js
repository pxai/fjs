import * as Bacon from "baconjs";

const map = function(fn, obj) {
  return obj.map(fn);
};

const idStream = map(function(event) {
  return "#" + event.target.id;
}, Bacon.fromEvent(document, "click"));

idStream.onValue(function(id) {
  console.log("You clicked ", id);
  return id;
});

const elementStream = map(function(id) {
  return document.querySelector(id);
}, idStream);

elementStream.onValue(function(element) {
  console.log("Inner is: ", element.innerHTML);
});

export { idStream, elementStream };