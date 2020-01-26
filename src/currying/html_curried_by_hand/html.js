function html(tag, lowercase, content) {
  return `<${tag}>${lowercase ? content.toLowerCase() : content}</${tag}>`;
}

function curriedHTML(tag) {
  return function(lowercase) {
    return function(content) {
      return `<${tag}>${lowercase ? content.toLowerCase() : content}</${tag}>`;
    };
  };
}

const div = curriedHTML("div")(false);

export { html, div };
