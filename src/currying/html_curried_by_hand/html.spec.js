import { html, div } from "./html";

it("should create a tag", () => {
  expect(html("h1", false, "Hello")).toBe("<h1>Hello</h1>");
});

it("should create a tag forcing lowercase", () => {
  expect(html("h1", true, "Hello")).toBe("<h1>hello</h1>");
});

it("should create a title with lowercase", () => {
  expect(div("GAMEVY")).toBe("<div>GAMEVY</div>");
});
