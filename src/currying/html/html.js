import R from "ramda";

function html(element, content) {
  return `<${element}>${content}</${element}>`;
}

const curriedHTML = R.curry(html);

const p = curriedHTML("p");
const div = curriedHTML("div");
const span = curriedHTML("span");

export { div, span, p };
