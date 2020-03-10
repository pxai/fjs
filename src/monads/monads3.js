import { IO } from "monet";
import R from "ramda";
import { map, mjoin } from "./utils";

const getTitle = () =>
  IO(function() {
    const input = document.getElementById("title");
    return input.value;
  });

const setTitle = text =>
  IO(function() {
    const title = document.getElementById("h1");
    title.innerHTML = text;

    return title.innerHTML;
  });

const initTitle = R.compose(
  map(setTitle),
  getTitle
);

initTitle()
  .run()
  .run();

/*
const initTitle = R.compose(
  mjoin,
  map(setTitle),
  getTitle
);

initTitle().run();
*/

export { getTitle, setTitle, initTitle };
