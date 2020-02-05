import Either from "folktale/result";
import { compose, curry } from "folktale/core/lambda";
import { mapEntries, mapValues } from "folktale/core/object";

const determineAge = function(user) {
  return user.age ? Either.Ok(user.age) : Either.Error("Don't have age");
};

const add = curry(2, (x, y) => x + y);
const map = curry(2, function(fn, obj) {
    return obj.map(fn)
  });

const yearOlder = compose(
  map(add(1)),
  determineAge
);

export { determineAge, yearOlder, add };