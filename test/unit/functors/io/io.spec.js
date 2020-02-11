import { name_io, greet_io } from "../../../../src/functors/io/io";
import expect from "expect";
import { IO } from "monet";

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
        it("should be an object", () => {
            console.log(greet_io);
            expect(typeof greet_io).toBe("function");
        });

        it.skip("should return a value", () => {
            const app = IO(greet_io);
            expect(app.run()).toBe("function");
        });
    });
})