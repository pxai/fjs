import * as Bacon from "baconjs";

const map = function(fn, obj) {
  return obj.map(fn);
};

const idStream = map(function(event) {
  return "#" + event.target.id;
}, Bacon.fromEvent(document.querySelector("#app"), "click"));

// Impure
idStream.onValue(function(id) {
  console.log("You clicked ", id);
  return id;
});

export { idStream, map };