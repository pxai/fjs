import expect from "expect";
import Either from "folktale/result";
import { determineAge, yearOlder, add } from "../../../../src/functors/either/either";

describe("Either", () => {
    it("returns ok when age is present", () => {
        expect(determineAge({ age: 22 })).toEqual(Either.Ok(22));
      });
      
      it("works add", () => {
          expect(add(2)(1)).toBe(3);
      });

      it("returns error when age is not present", () => {
        expect(determineAge({ foo: 22 })).toEqual(Either.Error("Don't have age"));
      });
      
      it("year older with valid year", () => {
        expect(yearOlder({ age: 22 })).toEqual(Either.Ok(23));
      });
});
