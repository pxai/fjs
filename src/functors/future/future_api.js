import * as R from "ramda";
import { mjoin, map } from "./utils";
import { Future } from "ramda-fantasy";
import axios from "axios";

function getPokeApi(name) {
  return new Future(function(rej, res) {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then(data => res(data))
      .catch(err => rej(err));
  });
}

function getData(data) {
  return new Future(function(rej, res) {
    console.log("Data: ", data);
    res(data);
  });
}

const catchPokemon = R.compose(
  mjoin,
  map(getData),
  getPokeApi
);

getData("pikachu").fork(
  err => console.error(`Oops ${err}`),
  success => console.log(`It worked with data ${success}`)
);

getPokeApi("pikachu").fork(
  err => console.error(`Oops ${err}`),
  success => console.log(`It worked with getPokeApi ${success}`)
);

catchPokemon("pikachu").fork(
  err => console.error(`Oops ${err}`),
  success => console.log(`It worked with api ${success.status}`)
);

