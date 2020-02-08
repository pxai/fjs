import R from "ramda";
import Either from "folktale/result";
import { compose, curry } from "folktale/core/lambda";
import M from "minimatch";

const add = greet => str => greet + str;
//const get = curry(2, (x, y) => x[value][y]);
const get = name => obj => obj.value[name];

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

/*_Maybe.prototype.map = function(fn) {
    return this.value ? Maybe(fn(this.value)) : Maybe(null);
  };
*/
const formatString = compose(
  showWelcome,
  checkActive
);

export { showWelcome, checkActive, formatString, get };