import * as R from "ramda";
import { mjoin, map } from "./utils";
import { Future } from "ramda-fantasy";

const getPokeApi = name =>
  Future((reject, resolve) =>
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`).then(data =>
      resolve(data)
    )
  );

const getData = data =>
  Future((reject, resolve) => {
    console.log("Data: ", data);
    return resolve(data);
  });

const catchPokemon = R.compose(
  mjoin,
  map(getData),
  getPokeApi
);

catchPokemon("pikachu").fork(
  err => console.log("Error: ", err),
  success => console.log("Success! ", success)
);

export { getPokeApi, getData, catchPokemon };