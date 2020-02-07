import expect from "expect";
import Either from "folktale/result";
import { showWelcome, checkActive, formatString, get } from "../../../../../src/functors/either/00_format_string/00_format_string";

describe("formatString", () => {
  it("get works", () => {

    const object = { active: true, name: "pello" };
    console.log("Either: ", Either.Ok(object));
    expect(get("name")(Either.Ok("pello"))).toEqual("pello");
  });

  it.skip("returns ok when age is present", () => {

      formatString({ active: true, name: "pello" })

      expect(formatString({ active: true, name: "pello" })).toEqual(Either.Ok("pello"));
    });
});
