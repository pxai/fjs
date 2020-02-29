import { Future } from "ramda-fantasy";
import { map, mjoin } from "./utils";
import * as R from "ramda";

const futureAction = text =>
  Future((reject, resolve) => setTimeout(() => resolve(text), 1000));

const futureUpper = text =>
  Future(resolve => setTimeout(() => resolve(text.toUpperCase()), 1000));

// futureAction(false).fork(success => console.log(`It worked ${success}`));

// futureUpper("pello").fork(success => console.log(`It worked ${success}`));

const futureComposed = R.compose(
  mjoin,
  map(futureUpper),
  futureAction
);
// futureUpper("pello").fork(success => console.log(`It worked ${success}`));
futureComposed("This text").fork(success =>
  console.log(`It worked: -${success}-`)
);

export { futureAction, futureUpper, futureComposed };