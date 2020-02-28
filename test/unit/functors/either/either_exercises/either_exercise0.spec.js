import { hasComments, count, countComments, sampleJson } from "../../../../../src/functors/either/either_exercises/either_exercise0";
import Either from "folktale/result";
import expect from "expect";

it("Should return an Ok Either with a value", () => {
  expect(hasComments(sampleJson)).toEqual(Either.Ok(sampleJson.comments));
});

it("Should return an error Either with message", () => {
  expect(hasComments({"post": {}})).toEqual(Either.Error("No comments"));
});

it("Should count comments", () => {
  expect(count(sampleJson.comments)).toEqual(sampleJson.comments.length);
});

it("Should return an Ok Either with the count", () => {
    expect(countComments(sampleJson)).toEqual(Either.Ok(sampleJson.comments.length));
  });
  
it("Should return an error Either with message", () => {
  expect(countComments({"post": {}})).toEqual(Either.Error("No comments"));
});

