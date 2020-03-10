import { Container, map, add } from "../../../../src/functors/container/container";
import expect from "expect";

it("Should be a correct container", () => {
  expect(Container(1)).toEqual({ value: 1 });
});

it("should have same result", () => {
  const mapContainer = map(add(1), Container(41));
  const containerMap = Container(41).map(add(1));

  expect(mapContainer).toEqual(containerMap);
});