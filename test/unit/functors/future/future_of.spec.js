import { hello, add, toUpper, trim } from "../../../src/functors/future/future_of";

describe("future_of", () => {
  describe("hello", () => {
    it("should be an object", () => {
      expect(typeof hello).toBe("object");
    });

    it("should return hello", () => {
      hello
        .run()
        .future()
        .map(result => expect(result).toBe("hello"));
    });
  });

  describe("add", () => {
    it("should be an object", () => {
      expect(typeof add).toBe("function");
    });

    it("should return sum", () => {
      add(40, 2)
        .run()
        .future()
        .map(result => expect(result).toBe(42));
    });
  });

  describe("toUpper", () => {
    it("should be an function", () => {
      expect(typeof toUpper).toBe("function");
    });

    it("should return toUpper", () => {
      toUpper("hola")
        .run()
        .future()
        .map(result => expect(result).toBe("HOLA"));
    });
  });

  describe("trim", () => {
    it("should be an function", () => {
      expect(typeof toUpper).toBe("function");
    });

    it("should return toUpper", () => {
      trim(" hola  ")
        .run()
        .future()
        .map(result => expect(result).toBe("hola"));
    });
  });
});
