import * as Bacon from "baconjs";

const map = function(fn, obj) {
  return obj.map(fn);
};

const getId = function(event) {
  // console.log("Event: ", event.target, " and", event.target.id);
  return event.target.id ? `#${event.target.id}` : "#myP";
};

const getElement = function(id) {
  return document.querySelector(id);
};

const bodyLoadStream = Bacon.fromEventTarget(document, "mouseover");
const idStream = map(getId, bodyLoadStream);
const elementStream = map(getElement, idStream);

// Impure
elementStream.onValue(function(element) {
  // console.log("Element? ", element);
  element.style.backgroundColor = "lime";
});
