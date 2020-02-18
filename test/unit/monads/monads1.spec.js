import Maybe from "../../../src/monads/maybe";
import { mjoin } from "../../../src/monads/monads1";
import expect from "expect";
import * as R from "ramda";

it("Maybe", () => {
  expect(Maybe(5)).toEqual({ value: 5 });
});

it("Nested maybe", () => {
  expect(Maybe(Maybe(5))).toEqual({ value: { value: 5 } });
});

it("should flatten maybe", () => {
  const result = mjoin(Maybe(Maybe(5)));
  expect(result).toEqual({value: 5});
});

it("should flatten maybe 3 levels", () => {
    const result = mjoin(mjoin(Maybe(Maybe(Maybe(5)))));
    expect(result).toEqual({value: 5});
});
