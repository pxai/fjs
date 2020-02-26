import { safeNumber, twiceMe } from "../../../../../src/functors/maybe/maybe_exercises/maybe_exercise1";
import { Maybe } from "../../../../../src/functors/maybe/maybe";
import expect from "expect";

it("Should return a Maybe with a value", () => {
  expect(safeNumber(666)).toEqual(Maybe(666));
});

it("Should return a Maybe with null", () => {
  expect(safeNumber(-9)).toEqual(Maybe(null));
});

it("Should duplicate the value", () => {
  expect(twiceMe(333)).toEqual(Maybe(666));
});
