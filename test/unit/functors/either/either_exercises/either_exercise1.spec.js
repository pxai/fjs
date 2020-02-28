import { checkUrl, addMarkdown, createMdLink } from "../../../../../src/functors/either/either_exercises/either_exercise1";
import Either from "folktale/result";

import expect from "expect";

it("Should return an Ok Either with a value", () => {
  expect(checkUrl("http://as.com")).toEqual(Either.Ok("http://as.com"));
});

it("Should return an error Either with message", () => {
  expect(checkUrl("fist://goatse.cx")).toEqual(Either.Error("Invalid url"));
});

it("Should create proper markdown", () => {
  expect(addMarkdown("http://as.com")).toEqual("[http://as.com](http://as.com)");
});

it("Should return an Ok Either with proper md", () => {
    expect(createMdLink("http://as.com")).toEqual(Either.Ok("[http://as.com](http://as.com)"));
  });
  
it("Should return an error Either with message", () => {
expect(createMdLink("fist://goatse.cx")).toEqual(Either.Error("Invalid url"));
});

