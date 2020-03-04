import { Future } from "ramda-fantasy";
import * as R from "ramda";
import { futureSquare } from "./future_exercise0";
import { map, mjoin, chain } from "../utils";

// Create a Future that returns the negative of a number
// within 1 second.
const futureNegative = number =>
  Future((reject, resolve) => setTimeout(() => resolve(-number), 1000));

// create a function that calculates the square of a number and
// returns its negative value
const futureSquareNegative = R.compose(
  chain(futureNegative),
  futureSquare
);

export { futureNegative, futureSquareNegative };
