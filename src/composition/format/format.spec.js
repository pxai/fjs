import { format } from "./format";

it("should format a string removing quotes + lowercase + first uppercase", () => {
  expect(format('hEL"Lo "wOrLD')).toBe("Hello world");
});
