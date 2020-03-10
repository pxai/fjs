import { map } from "../eventstream";
import * as Bacon from "baconjs";

const getSelectedValue = event => event.target.value;

// create a stream of hero names mapping over
// getSElectedValue and the events coming from 
// from the select change
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
