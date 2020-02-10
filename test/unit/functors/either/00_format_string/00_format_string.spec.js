import expect from "expect";
import R from "ramda";
import Either from "folktale/result";
import { showWelcome, checkActive, formatString, get } from "../../../../../src/functors/either/00_format_string/00_format_string";

describe("formatString", () => {
  it("get works", () => {
    const object = { active: true, name: "pello" };
    expect(get("name")(Either.Ok(object))).toEqual("pello");
  });

  describe("checkActive", () => {
    it("returns ok if checkActive is true", () => {
      const object = { active: true, name: "pello" };
      expect(checkActive(object)).toEqual(Either.Ok(object));
    });
  
    it("returns Error if checkActive is false", () => {
      const object = { active: false, name: "pello" };
      expect(checkActive(object)).toEqual(Either.Error("Invalid user"));
    });
  });

  describe("showWelcome", () => {
    it("returns welcomed", () => {
      const object = { active: true, name: "pello" };
      expect(showWelcome(Either.Ok(object))).toEqual("Welcome pello");
    });

    it("returns welcomed", () => {
      expect(showWelcome(Either.Error("Invalid user"))).toEqual("Welcome undefined");
    });
  });

  it("returns ok when age is present", () => {
      const object = { active: true, name: "pello" };
      expect(formatString(object)).toEqual("Welcome pello");
  });
});
