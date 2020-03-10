import { map } from "../eventstream";
import * as Bacon from "baconjs";

const getId = function(event) {
  // console.log("Event: ", event.target, " and", event.target.id);
  return event.target.id ? `#${event.target.id}` : "#myP";
};

const getElement = function(id) {
  return document.querySelector(id);
};

const bodyLoadStream = Bacon.fromEventTarget(document, "mouseover");
// applying map to getId  and bodyLoadStream, 
// create a function that returns a stream of ids
const idStream = map(getId, bodyLoadStream);

// applying map to getElement and idStream,
// create a function that returns a stream of dom elements
const elementStream = map(getElement, idStream);

// Impure
// when an element is received, change its bacground color
// with element.style.backgrundColor
elementStream.onValue(function(element) {

  element.style.backgroundColor = "lime";
});
