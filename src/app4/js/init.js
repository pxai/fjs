import { urlStream } from "./eventstreams";
import { catchPokemon } from "./future";
import { notFoundIO, clearIO, pokemonIO } from "./io";
import Either from "folktale/result";
import { log, map, compose, mjoin } from "./utils";
import * as R from "ramda";

//const getPokemon = R.compose(catchPokemon, log)
/*
const validPokemon = function(pokemon) {
    console.log("Lets see: ", pokemon.name);
    return pokemon.name ? Either.Ok(pokemon) : Either.Error("Not a valid pokemon!");
  };


const showIt = R.compose(
    mjoin,
    map(pokemonIO),
    validPokemon
);*/

// IMPURE starts here:(
const search = (url) => catchPokemon(url).fork(err => clearIO().run(), suc => pokemonIO(suc).run());
const searchLogged = R.compose(search, log)
urlStream.onValue(search);