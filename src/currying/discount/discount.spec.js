import { discount10Percent } from "./discount";

it("should discount correctly", () => {
  expect(discount10Percent(10)).toBe(1);
});
