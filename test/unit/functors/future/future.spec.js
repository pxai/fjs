import { one, inc } from "../../../../src/functors/future";

describe("futures", () => {
  describe("one", () => {
    it("should be a function", () => {
      expect(typeof one).toBe("object");
    });

    it("should resolve to 1", () => {
      one
        .run()
        .future()
        .map(result => expect(result).toBe(1));
    });

    it("should call listener", () => {
      const resolvedSpy = jest.fn();
      one.run().listen({
        onResolved: resolvedSpy
      });

      one.run();
      expect(resolvedSpy).toBeCalledWith(1);
    });
  });

  describe("inc", () => {
    it("should be a function", () => {
      expect(typeof inc).toBe("object");
    });

    it("should inc one future", () => {
      inc
        .run()
        .future()
        .map(result => expect(result).toBe(2));
    });
  });
});