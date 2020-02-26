import { Maybe, map } from "../maybe";
import * as R from "ramda"; 

// Create a function called safe integer that returns
// a Maybe with a positive integer or Maybe null
const safeInteger = function (number) {
    return typeof number === "number" && number >= 0 ? Maybe(number) : Maybe(null);
}

const twice = function (number) {
    return number * 2;
}

// Create a function that gets a safeNumber and duplicates its value
const twiceMe = R.compose(map(twice), safeInteger);

export { safeInteger, twiceMe };
