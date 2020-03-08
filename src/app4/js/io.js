import { IO } from "monet";
import * as R from "ramda";
import { map } from "./utils";

const htmlIO = R.curry((selector, content) => IO(function() {
  return document.querySelector(selector).innerHTML = content;
}));

const resultIO = htmlIO("result");

export { htmlIO, resultIO };