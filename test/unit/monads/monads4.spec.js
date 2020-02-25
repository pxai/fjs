import { format, numb, ghLogin } from "./monads4";

describe("monads4", () => {
  describe("format", () => {
    it("should be a function", () => {
      expect(typeof format).toBe("function");
    });

    it("should return hello", () => {
      format(" hello  ")
        .run()
        .future()
        .map(result => expect(result).toBe("HELLO"));
    });
  });

  describe("numb", () => {
    it("should be an function", () => {
      expect(typeof format).toBe("function");
    });

    it("should return neg add", async () => {
      numb(40, 2)
        .run()
        .future()
        .map(r => expect(r).toBe(-42));
    });
  });

  describe("ghLogin", () => {
    it("should be an function", () => {
      expect(typeof ghLogin).toBe("function");
    });

    it("should return neg add", async () => {
      ghLogin("pxai")
        .run()
        .future()
        .map(r => expect(r).toBe(-42));
    });
  });
});
