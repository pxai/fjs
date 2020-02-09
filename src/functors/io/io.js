import { IO } from "monet";
import { compose, curry } from "folktale/core/lambda";
import { mapEntries, mapValues } from "folktale/core/object";

const name_io = IO(function() {
  return document.getElementById("name").value;
});

const concat = x => y => x + y;

const greet_io = mapValues(concat("Hello"), name_io);

export { name_io, greet_io };