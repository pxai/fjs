import { Maybe, map, add } from "../../../../src/functors/maybe/maybe";
import expect from "expect";

it("Should behave as a container", () => {
  expect(Maybe(1)).toEqual({ value: 1 });
});

it("Should have null value", () => {
  expect(Maybe(null)).toEqual({ value: null });
});

it("should have same result", () => {
  const mapMaybe = map(add(1), Maybe(41));
  const maybeMap = Maybe(41).map(add(1));

  expect(mapMaybe).toEqual(maybeMap);
});
