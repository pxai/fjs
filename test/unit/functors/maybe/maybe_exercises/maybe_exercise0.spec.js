import { safeString, cleanString } from "../../../../../src/functors/maybe/maybe_exercises/maybe_exercise0";
import { Maybe } from "../../../../../src/functors/maybe/maybe";
import expect from "expect";

it("Should return a Maybe with a value", () => {
  expect(safeString("  it works!  ")).toEqual(Maybe("  it works!  "));
});

it("Should return a Maybe with null", () => {
  expect(safeString(666)).toEqual(Maybe(null));
});

it("Should trim a string", () => {
  expect(cleanString("  it works!  ")).toEqual(Maybe("it works!"));
});

it("Should not trim", () => {
  expect(cleanString(666)).toEqual(Maybe(null));
});
