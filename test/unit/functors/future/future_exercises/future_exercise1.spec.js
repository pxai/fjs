import { futureNegative, futureSquareNegative } from "../../../../../src/functors/future/future_exercises/future_exercise1";
import expect from "expect";

describe("future_exercise1", () => {
    describe("futureNegative", () => {
      it("should be a function", () => {
        expect(typeof futureNegative).toBe("function");
      });
  
      it("should resolve to 4", () => {
        futureNegative(2).fork(
          error => console.error(error),
          success => expect(success).toBe(-2)
        );
      });
    });
  
    describe("futureSquareNegative", () => {
      it("should be a function", () => {
        expect(typeof futureSquareNegative).toBe("function");
      });
  
      it("should resolve to 4", () => {
        futureSquareNegative(2).fork(
          error => console.error(error),
          success =>  expect(success).toBe(-4)
        );
      });
    });
  });
  