import { safeInteger, twiceMe } from "../../../../../src/functors/maybe/maybe_exercises/maybe_exercise1";
import { Maybe } from "../../../../../src/functors/maybe/maybe";
import expect from "expect";

it("Should return a Maybe with a value", () => {
  expect(safeInteger(666)).toEqual(Maybe(666));
});

it("Should return a Maybe with null", () => {
  expect(safeInteger(-9)).toEqual(Maybe(null));
});

it("Should duplicate the value", () => {
  expect(twiceMe(333)).toEqual(Maybe(666));
});

it("Should not duplicate the value", () => {
  expect(twiceMe("hey")).toEqual(Maybe(null));
});
