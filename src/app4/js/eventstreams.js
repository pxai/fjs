import * as Bacon from "baconjs";
import { map } from "./utils";

const inputValue = event => event.target.value;
const addUrl = searchTerm => `https://pokeapi.co/api/v2/pokemon/${searchTerm}`;
const keypressStream = Bacon.fromEvent(document.querySelector("#search"), "keypress");
const searchStream = map(inputValue, keypressStream);


const urlStream = map(addUrl, searchStream);

export { inputValue, keypressStream, searchStream, urlStream };