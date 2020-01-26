import { words } from "./split";

it("should split into words", () => {
  expect(words("This is the end").length).toBe(4);
});
