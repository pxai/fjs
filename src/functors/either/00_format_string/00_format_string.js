import R from "ramda";
import Either from "folktale/result";
import { compose, curry } from "folktale/core/lambda";
import M from "minimatch";

const add = curry(2, function(prefix, name) {
  return prefix + name;
});

const get = curry(2, function (name , obj) {
  return obj[name];
});

const showWelcome = compose(
    add("Welcome "),
    get("name")
);

const checkActive = function(user) {
  return user.active ? Either.Ok(user) : Either.Error("Invalid user");
};

const map = curry(2, function(fn, obj) {
  return obj.map(fn)
});

const formatString = compose(
  map(showWelcome),
  checkActive
);

export { showWelcome, checkActive, formatString, get };