import { name_io, greet_io } from "../../../../src/functors/io/io";
import expect from "expect";
import { IO } from "monet";

describe("io", () => {
    let documentRef;
    
    before(() =>{
        documentRef = global.document;
        global.document = {getElementById: () => { return { value: "Pablete"} } };
    });

    after(() =>{
        global.documentRef = documentRef;
    });

    describe("name_io", () => {
        it("should be an object", () => {
            expect(typeof name_io).toBe("function");
        });

        it("should return a value", () => {
            expect(name_io().run()).toBe("Pablete");
        });
    });

    describe("greet_io", () => {
        it("should be an object", () => {
            expect(typeof greet_io).toBe("function");
        });

        it("should return a value", () => {
            expect(greet_io().run()).toBe("PABLETE");
        });
    });
})