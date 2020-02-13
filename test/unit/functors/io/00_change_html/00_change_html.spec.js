import { html_io, greet_io } from "../../../../../src/functors/io/00_change_html/00_change_html";
import expect from "expect";

describe("00_change_html", () => {

    beforeEach(() =>{
        const windowRef = global.window;
        global.document = {querySelector: () => { return { innerHTML: "SuperTitle"} } };
    });

    describe("name_io", () => {
        it("should be an object", () => {
            expect(typeof html_io).toBe("function");
        });

        it("should return a value", () => {
            expect(html_io().run()).toBe("SuperTitle");
        });
    });

    describe("greet_io", () => {
        it("should be an object", () => {
            expect(typeof greet_io).toBe("function");
        });

        it("should return a value", () => {
            expect(greet_io("h1").run()).toBe("SUPERTITLE");
        });
    });
})