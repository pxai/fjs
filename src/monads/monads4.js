
import * as R from "ramda";
import { mjoin, map } from "./utils";
import { of, task } from "folktale/concurrency/task";

const toUpper = a => of(a.toUpperCase());
const trim = a => of(a.trim());

const format = R.compose(
  mjoin,
  map(toUpper),
  trim
);

const neg = a => task(resolver => resolver.resolve(-a));
const add = (a, b) => task(resolver => resolver.resolve(a + b));

const numb = R.compose(
  mjoin,
  map(neg),
  add
);

const getGitHupRepo = user =>
  task(resolver =>
    resolver.resolve(fetch(`https://api.github.com/users/${user}`))
  );

const getLogin = data => task(resolver => resolver.resolve(data.json()));

const getAvatar = function(json) {
  console.log("This is the json:", json);
  return json.then(data => data.avatar_url);
};

const ghLogin = R.compose(
  mjoin,
  map(getLogin),
  getGitHupRepo
);

export { format, numb, ghLogin };

// const f_a = Future(getAvatar);

//getGitHupRepo("pxai").then(result => console.log(result));
// getLogin(getGitHupRepo("pxai")).then(result => console.log("Hey", result));
