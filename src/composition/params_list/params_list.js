import R from "ramda";

function decode(uri) {
  return decodeURI(uri);
}

function getQuery(uri) {
  return uri.split("?")[1];
}

function getParams(query) {
  return query.split("&").map(a => a.split("=")[0]);
}

// Here, replace R.identity with a composition R.compose(...)
// of the previous functions to to pass the tests
const paramsList = R.identity; //a => a;

export { paramsList };
