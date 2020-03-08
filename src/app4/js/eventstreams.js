import * as Bacon from "baconjs";
import * as R from "ramda";
import { map } from "./utils";
import { Maybe } from "./maybe";

const inputValue = event => event.target.value;
const addUrl = searchTerm => `https://pokeapi.co/api/v2/pokemon/${searchTerm}`;

const keypressStream = Bacon.fromEvent(document.querySelector("#search"), "keyup");

const searchStream = map(inputValue, keypressStream);
const urlStream = map(addUrl, searchStream);

export { inputValue, keypressStream, searchStream, urlStream };