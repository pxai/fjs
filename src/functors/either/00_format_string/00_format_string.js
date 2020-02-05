import R from "ramda";
import Either from "folktale/result";
import { compose } from "folktale/core/lambda";

const get = name => obj => obj.name;

const showWelcome = compose(
  R.add("Welcome "),
    get("name")
);

const checkActive = function(user) {
  return user.active ? Either.Ok(user) : Either.Error("Invalid user");
};

const map = R.curry(function(fn, obj) {
console.log("fn", fn.toString(), "obj:", obj.map);
  return obj.map(fn)
});

/*_Maybe.prototype.map = function(fn) {
    return this.value ? Maybe(fn(this.value)) : Maybe(null);
  };
*/
const formatString = compose(
  map(showWelcome),
  checkActive
);

export { showWelcome, checkActive, formatString, get };