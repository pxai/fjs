import { logger } from "./logger";

it("should create a formatted logger with prefix+date+text", () => {
  const date = new Date().toUTCString();
  expect(logger("it works")).toMatch("Log> " + date + " it works.");
});
