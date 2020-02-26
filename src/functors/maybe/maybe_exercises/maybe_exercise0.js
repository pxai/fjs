import { Maybe, map } from "../maybe";
import * as R from "ramda"; 

const safeString = function (text) {
    return typeof text === "string" ? Maybe(text) : Maybe(null);
}

const trim = function (text) {
    return text.trim();
}

// Create a function that gets a safeString and applies trim to it.
const cleanString = R.compose(map(trim), safeString);

export { safeString, cleanString };
