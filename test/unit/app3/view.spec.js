import expect from "expect";
import view from "../../../src/app3/js/view";
import defaultModel from "../../../src/app3/js/model";
import createElement from "virtual-dom/create-element";

describe("App3 views", () => {
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
            expect(title.childNodes[0].data).toBe("Currency Converter");
        });

        it("has a div for selects", () => {
            const div = html.childNodes[1];

            expect(div.nodeName).toBe("DIV");
        });

        describe("forms", () => {
            let div;
            const UNITS = ['Dollar', 'Euro', 'Pound']

            beforeEach(() => {
                div = html.childNodes[1];
            })

            describe("left", () => {
                let leftDiv;
                beforeEach(() => {
                    leftDiv = div.childNodes[0];
                })

                it("Has a left div", () => {
                    expect(leftDiv.nodeName).toBe("DIV");
                });
    
                it("Has a left input", () => {
                    const input = leftDiv.childNodes[0];
    
                    expect(input.nodeName).toBe("INPUT");
                });
    
                it("Has a select", () => {
                    const innerDiv = leftDiv.childNodes[1];
                    const select = innerDiv.childNodes[0];
    
                    expect(select.nodeName).toBe("SELECT");
                });
    
                it("has options in select", () => {
                    const innerDiv = leftDiv.childNodes[1];
                    const select = innerDiv.childNodes[0];
    
                    expect(select.childNodes.length).toBe(UNITS.length);

                    UNITS.forEach( (unit, i) => {
                        expect(innerText(select.childNodes[i])).toBe(unit);
                    })
                });
            });

            describe("rigth", () => {
                let rightDiv;
                beforeEach(() => {
                    rightDiv = div.childNodes[1];
                })

                it("Has a left div", () => {
                    expect(rightDiv.nodeName).toBe("DIV");
                });
    
                it("Has a left input", () => {
                    const input = rightDiv.childNodes[0];
    
                    expect(input.nodeName).toBe("INPUT");
                });
    
                it("Has a select", () => {
                    const innerDiv = rightDiv.childNodes[1];
                    const select = innerDiv.childNodes[0];
    
                    expect(select.nodeName).toBe("SELECT");
                });
    
                it("has options in select", () => {
                    const innerDiv = rightDiv.childNodes[1];
                    const select = innerDiv.childNodes[0];
    
                    expect(select.childNodes.length).toBe(UNITS.length);

                    UNITS.forEach( (unit, i) => {
                        expect(innerText(select.childNodes[i])).toBe(unit);
                    })
                });
            });
            
        });
    });

    const innerText = element => element.childNodes[0].data;
});
