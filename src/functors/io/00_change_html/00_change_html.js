import { IO } from "monet";
import { compose, curry } from "folktale/core/lambda";

const html_io = (tag) => IO(function() {
  return document.querySelector(tag).innerHTML;
});

const map = curry(2, function(fn, obj) {
    return obj.map(fn)
});

const shout = msg => msg.toUpperCase();

const greet_io = compose(map(shout), html_io);

export { html_io, greet_io };