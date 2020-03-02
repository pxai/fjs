import * as Bacon from "baconjs";

const map = function(fn, obj) {
  return obj.map(fn);
};

const getSelectedValue = event => event.target.value;
const heroStream = map(
  getSelectedValue,
  Bacon.fromEvent(document.querySelector("#heroes"), "change")
);

// Impure
const setHero = function(hero) {
  document.querySelector("#name").value = hero;
};

heroStream.onValue(function(hero) {
  console.log("You clicked! ", hero);
  setHero(hero);
});

export { heroStream, setHero };
