import { getValueIO, toString, saveStorageIO, saveValueFromInput } from "../../../../../src/functors/io/io_exercises/io_exercise1";
import expect from "expect";

describe("ioexercise0", () => {
    let windowRef, documentRef;
    
    before(() =>{
        windowRef = global.window;
        documentRef = global.document;
        global.window = { localStorage: { get: (key) => { return { color: "red"} } } };
        global.document = 
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