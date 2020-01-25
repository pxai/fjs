import { positiveInteger } from "./positive_integer";

it("should format a string to a positive integer", () => {
  expect(positiveInteger("-88")).toBe(88);
});
