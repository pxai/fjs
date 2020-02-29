import { getStorageIO, getColor, getBackgroundColor  } from "../../../../../src/functors/io/io_exercises/io_exercise0";
import expect from "expect";

describe("ioexercise0", () => {
    let windowRef;
    
    before(() =>{
        windowRef = global.window;
        global.window = { localStorage: { get: (key) => { return { color: "red"} } } };
    });

    after(() =>{
        global.window = windowRef;
    });

    describe("getStorageIO", () => {
        it("should be a function", () => {
            expect(typeof getStorageIO).toBe("function");
        });

        it("should return a property", () => {
            expect(getStorageIO().run()).toEqual({ color: "red" });
        });
    });

    describe("getColor", () => {
        it("should return a property", () => {
            expect(getColor({ color: "fuchsia"})).toBe("fuchsia");
        });
    });

    describe("getBackgroundColor", () => {
        it("should be a function", () => {
            expect(typeof getBackgroundColor).toBe("function");
        });

        it("should return a property", () => {
            expect(getBackgroundColor().run()).toEqual("red");
        });
    });
})