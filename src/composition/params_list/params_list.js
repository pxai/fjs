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

const paramsList = R.compose(
    getParams,
    getQuery,
    decode
);

export { paramsList };
