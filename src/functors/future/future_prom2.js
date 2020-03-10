import { Future } from "ramda-fantasy";
import { map, mjoin, chain } from "./utils";
import * as R from "ramda";

const futureAction = success =>
  Future((reject, resolve) =>
    setTimeout(() => resolve("Everything worked as expected in Future"), 1000)
  );

const futureUpper = text =>
  Future((reject, resolve) =>
    setTimeout(() => resolve(text.toUpperCase()), 1000)
  );

futureAction(false).fork(
  err => console.error(`D'Oh! ${err}`),
  success => console.log(`Hurray! ${success}`)
);

futureUpper("pello").fork(
  err => console.error(`D'Oh! ${err}`),
  success => console.log(`Hurray! ${success}`)
);

const numb = R.compose(
  mjoin,
  map(futureUpper),
  futureAction
);

numb(true).fork(
  err => console.error(`Oops ${err}`),
  success => console.log(`It worked ${success}`)
);