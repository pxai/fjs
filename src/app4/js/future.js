import * as R from "ramda";
import axios from "axios";
import { Future } from "ramda-fantasy";
import { mjoin, map } from "./utils";

const fetchUrl = (url) => new Future(function(rej, res) {
    axios
      .get(url)
      .then(data => res(data))
      .catch(err => rej(err));
});

function getData(data) {
  return new Future(function(rej, res) {
    data.data ? res(data.data) : rej({})
  });
}

const catchPokemon = R.compose(
  mjoin,
  map(getData),
  fetchUrl
);

export { fetchUrl, getData, catchPokemon };