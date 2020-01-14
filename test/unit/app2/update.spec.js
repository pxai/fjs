import expect from "expect";
import view from "../../../src/app2/js/view";
import defaultModel from "../../../src/app2/js/model";
import createElement from "virtual-dom/create-element";

describe("App2 views", () => {
    let change;
    let model;
    let html;

    describe("With default model", () => {
        beforeEach(() => {
            model = defaultModel;
            change = () => {};
            html = createElement(view(change, model));
        });
    
        it("has a div wrapper", () => {
            expect(html.nodeName).toBe("DIV");
        });

        it("has a title", () => {
            const title = html.childNodes[0];

            expect(title.nodeName).toBe("H1");
            expect(title.childNodes[0].data).toBe("Todo List");
        });

        it("has a form", () => {
            const form = html.childNodes[1];

            expect(form.nodeName).toBe("FORM");
        });
    });
});
