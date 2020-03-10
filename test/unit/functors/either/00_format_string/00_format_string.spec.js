import expect from "expect";
import R from "ramda";
import Either from "folktale/result";
import { showWelcome, checkActive, formatString, get } from "../../../../../src/functors/either/00_format_string/00_format_string";

describe("formatString", () => {
  it("get works", () => {
    const object = { active: true, name: "pello" };
    expect(get("name")(Either.Ok(object).value)).toEqual("pello");
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
      expect(Either.Ok(object).map(showWelcome)).toEqual(Either.Ok("Welcome pello"));
    });

    it("returns welcomed", () => {
      expect(Either.Error("Invalid user").map(showWelcome)).toEqual(Either.Error("Invalid user"));
    });
  });

  it("returns ok when active is present", () => {
      const object = { active: true, name: "pello" };
      expect(formatString(object).value).toEqual("Welcome pello");
  });
});
