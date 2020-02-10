import { name_io, greet_io } from "../../../../src/functors/io/io";
import expect from "expect";

describe("io", () => {

    beforeEach(() =>{
        const windowRef = global.window;
        global.document = {getElementById: () => { return { value: "Pablete"} } };
    });

    describe("name_io", () => {
        it("should be an object", () => {
            expect(typeof name_io).toBe("object");
        });

        it("should return a value", () => {
            expect(name_io.run()).toBe("Pablete");
        });
    });

    describe("greet_io", () => {
        it.skip("should be an object", () => {
            console.log(greet_io);
            expect(greet_io).toBe({});
        });

        it("should return a value", () => {
            //expect(greet_io).toBe("Nothing here");
        });
    });
})