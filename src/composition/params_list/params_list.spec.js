import { paramsList } from "./params_list";

it("should get an array of params from url", () => {
  expect(paramsList("http://88.com/?id=42&name=me")).toEqual(["id", "name"]);
});
