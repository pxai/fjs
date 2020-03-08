import { IO } from "monet";
import * as R from "ramda";

const htmlIO = R.curry((selector, content) => IO(function() {
  return document.querySelector(selector).innerHTML = content;
}));

const pokemonIO = (content) => IO(function() {
  ["name", "base_experience", "weight"].forEach( element => {
      document.querySelector(`#${element}`).innerHTML = `${element}: ${content[element]}`;
  })
  document.querySelector("#image").src = content.sprites.front_default;
});

const clearIO = (content) => IO(function() {
  ["name", "base_experience", "weight"].forEach( element => {
    document.querySelector(`#${element}`).innerHTML = "";
  })
  document.querySelector("#image").src = "";
});


export { htmlIO, clearIO, pokemonIO };