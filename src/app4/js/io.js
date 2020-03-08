import { IO } from "monet";
import * as R from "ramda";

const htmlIO = R.curry((selector, content) => IO(function() {
  console.log("About to set: ", selector, content);
  return document.querySelector(selector).innerHTML = content;
}));

const pokemonIO = (content) => IO(function() {
  console.log("About to set: ", content);
  document.querySelector("#name").innerHTML = content.name;
  document.querySelector("#base_experience").innerHTML = `Base experience: ${content.base_experience}`;
  document.querySelector("#weight").innerHTML = `Weight: ${content.weight}`;
  document.querySelector("#image").src = content.sprites.front_default;
});


const resultIO = htmlIO("#result");

export { htmlIO, resultIO, pokemonIO };