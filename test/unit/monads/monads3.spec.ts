import { getTitle, setTitle, initTitle } from "../../../src/monads/monads3";
import expect from "expect";
import { IO } from "monet";

describe("io", () => {
  before(function () {
    // this.jsdom = require('jsdom-global')()
  })

  after(function () {
    // this.jsdom()
  })

  describe("getTitle", () => {
    it("should be an function", () => {
      expect(typeof getTitle).toBe("function");
    });

    it("should return a value", () => {
      expect(getTitle().run()).toBe("Super Title");
    });
  });

  describe("setTitle", () => {
    it("should be an function", () => {
      expect(typeof setTitle).toBe("function");
    });

    it("should return a value", () => {
      expect(setTitle("OK").run()).toBe("OK");
    });
  });

  describe("initTitle", () => {
    it("should be an function", () => {
      expect(typeof initTitle).toBe("function");
    });

    it("is a nested IO", () => {
      expect(initTitle()["@@type"]).toBe("monet.js/IO");
      expect(initTitle().run()["@@type"]).toBe("monet.js/IO");
    });

    it("should get title from input and set it", () => {
      expect(
        initTitle()
          .run()
          .run()
      ).toEqual("Super Title");
    });
  });
});
