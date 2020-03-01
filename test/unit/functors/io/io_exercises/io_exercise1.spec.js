import { getValueIO, toString, saveStorageIO, saveValueFromInput } from "../../../../../src/functors/io/io_exercises/io_exercise1";
import expect from "expect";
import * as sinon from "sinon";

describe("ioexercise1", () => {
    let windowRef, documentRef, setItemSpy;
    
    before(() =>{
        documentRef = global.document;
        windowRef = global.window;
        global.document = { querySelector: (field) => { return { value: "green" } } };
        global.window = { localStorage: { __proto__: { setItem: sinon.spy() } } };
        setItemSpy = sinon.spy()

    });

    after(() =>{
        global.window = windowRef;
        global.document = documentRef
    });

    describe("getValueIO", () => {
        it("should be a function", () => {
            expect(typeof getValueIO).toBe("function");
        });

        it("should return a value", () => {
            expect(getValueIO("input").run()).toEqual({color: "green"});
        });
    });

    describe("toString", () => {
        it("should return stringify a JSON", () => {
            expect(toString({ color: "fuchsia"})).toBe("{\"color\":\"fuchsia\"}");
        });
    });

    describe("saveStorageIO", () => {
        it("should be a function", () => {
            expect(typeof saveStorageIO).toBe("function");
        });
    });
})