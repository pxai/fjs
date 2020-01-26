import { div, span, p } from "./html";

it("should create a p element", () => {
  expect(p("Hello")).toBe("<p>Hello</p>");
});

it("should create a div element", () => {
  expect(div("Hello")).toBe("<div>Hello</div>");
});

it("should create a span element", () => {
  expect(span("Hello")).toBe("<span>Hello</span>");
});

it("should create a nested div span element", () => {
  expect(div(span("Hello"))).toBe("<div><span>Hello</span></div>");
});
