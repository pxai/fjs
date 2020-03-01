import { futureAction, futureUpper, futureComposed } from "../../../src/functors/future/future_prom1";

describe("future with ramda-fantasy", () => {
  describe("futureAction", () => {
    it("should be a Future", () => {
      expect(typeof futureAction).toBe("function");
    });

    it("should have a fork function", () => {
      expect(typeof futureAction().fork).toBe("function");
    });
  });

  describe("futureUpper", () => {
    it("should be a Future", () => {
      expect(typeof futureUpper).toBe("function");
    });

    it("should have a fork function", () => {
      expect(typeof futureUpper().fork).toBe("function");
    });
  });

  describe("futureComposed", () => {
    it("should be a Future", () => {
      expect(typeof futureComposed).toBe("function");
    });

    it("should have a fork function", () => {
      expect(typeof futureComposed().fork).toBe("function");
    });
  });
});
