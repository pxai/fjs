import R from "ramda";
import Either from "folktale/result";
import { map } from "../either";

const checkUrl = function(url) {
  return url.startsWith("http://") ? Either.Ok(url) : Either.Error("Invalid url");
};

const addMarkdown = function (url) {
    return `[${url}](${url})`;
}

// Create a function called creatMdLink that gets an URL and returns it in md format.
const createMdLink = R.compose(
  map(addMarkdown),
  checkUrl
);

export { checkUrl, addMarkdown, createMdLink };