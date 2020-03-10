import { Future } from "ramda-fantasy";

// Create a Future that returns the square of a number
// within 1 second.
const futureSquare = number =>
  Future((reject, resolve) => setTimeout(() => resolve(number * number), 1000));

export { futureSquare };