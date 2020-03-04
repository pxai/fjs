import { futureSquare } from "../../../../../src/functors/future/future_exercises/future_exercise0";
import expect from "expect";

describe("futureSquare", () => {
  it("should be a function", () => {
    expect(typeof futureSquare).toBe("function");
  });

  it("should resolve to 4", () => {
    futureSquare(2).fork(
      error => console.error(error),
      success => expect(success).toBe(4)
    );
  });
});
