import expect from "expect";
import update, { 
    leftValueInputMsg, 
    rightValueInputMsg, 
    leftUnitChangedMsg, 
    rightUnitChangedMsg,
    MSGS,
    convert
} from "../../../src/app3/js/update";
import defaultModel from "../../../src/app3/js/model";

describe("App3 update", () => {
    let change;
    let model;
    let html;

    describe("Msg functions", () => {
        it("leftValueInputMsg", () => {
            const leftValue = 88;
            expect(leftValueInputMsg(leftValue)).toStrictEqual({
                type: MSGS.LEFT_VALUE_INPUT,
                leftValue,
            });
        });

        it("rightValueInputMsg", () => {
            const rightValue = 88;
            expect(rightValueInputMsg(rightValue)).toStrictEqual({
                type: MSGS.RIGHT_VALUE_INPUT,
                rightValue,
            });
        });

        it("leftUnitChangedMsg", () => {
          const leftUnit = 88;
            expect(leftUnitChangedMsg(leftUnit)).toStrictEqual({
                type: MSGS.LEFT_UNIT_CHANGED,
                leftUnit,
            });
        });

        it("rightUnitChangedMsg", () => {
            const rightUnit = 88;
              expect(rightUnitChangedMsg(rightUnit)).toStrictEqual({
                type: MSGS.RIGHT_UNIT_CHANGED,
                rightUnit,
              });
          });
    });

    describe("Update function", () => {
        describe ("leftValueInput", () => {
            it("leftValueInput with normal value", () => {
                const leftValue = 88;
                const msg = leftValueInputMsg(leftValue);
    
                const result = update(msg, defaultModel);
                const expected = convert({ ...defaultModel, sourceLeft: true, leftValue });
    
                expect(result).toStrictEqual(expected);
            });
    
            it("leftValueInput with empty", () => {
                const leftValue = "";
                const msg = leftValueInputMsg(leftValue);
    
                const result = update(msg, defaultModel);
                const expected = { ...defaultModel, sourceLeft: true, leftValue: "", rightValue: "" };
    
                expect(result).toStrictEqual(expected);
            });
        });

        describe ("rightValueInput", () => {
            it("rightValueInput with normal value", () => {
                const rightValue = 88;
                const msg = rightValueInputMsg(rightValue);
    
                const result = update(msg, defaultModel);
                const expected = convert({ ...defaultModel, sourceLeft: false, rightValue });
    
                expect(result).toStrictEqual(expected);
            });
    
            it("rightValueInput with empty", () => {
                const rightValue = "";
                const msg = rightValueInputMsg(rightValue);
    
                const result = update(msg, defaultModel);
                const expected = { ...defaultModel, sourceLeft: false, leftValue: "", rightValue: "" };
    
                expect(result).toStrictEqual(expected);
            });
        });

        it("leftUnitChanged", () => {
            const leftUnit = "Euro";
            const msg = leftUnitChangedMsg(leftUnit);

            const result = update(msg, defaultModel);
            const expected = convert({ ...defaultModel, leftUnit });

            expect(result).toStrictEqual(expected);
        });

        it("rightUnitChanged", () => {
            const rightUnit = "Euro";
            const msg = rightUnitChangedMsg(rightUnit);

            const result = update(msg, defaultModel);
            const expected = convert({ ...defaultModel, rightUnit });

            expect(result).toStrictEqual(expected);
        });
    });
});
