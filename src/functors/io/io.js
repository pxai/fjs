import { IO } from "monet";
import { compose, curry } from "folktale/core/lambda";

const name_io = () => IO(function() {
  return document.getElementById("name").value;
});

const map = curry(2, function(fn, obj) {
    return obj.map(fn)
});

const shout = msg => msg.toUpperCase();

const greet_io = compose(map(shout), name_io);

export { name_io, greet_io };