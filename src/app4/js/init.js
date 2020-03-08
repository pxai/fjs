import { urlStream } from "./eventstreams";
import { catchPokemon } from "./future";
import { resultIO, pokemonIO } from "./io";
import Either from "folktale/result";
import { log, map, compose } from "./utils";
import * as R from "ramda";

//const getPokemon = R.compose(catchPokemon, log)

// IMPURE starts here:(
// const catchPokemon = (url) => fetchUrl(url).fork(err => Either.Error(err), suc => Either.Ok(suc))
const catchPokemonF = (url) => catchPokemon(url).fork(err => err, suc => pokemonIO(suc).run());
// const catchPokemonLog = R.compose(catchPokemonF, log)
// urlStream.onValue(R.compose(catchPokemonF, log));
urlStream.onValue(catchPokemonF);