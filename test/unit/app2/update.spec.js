import expect from "expect";
import update, { deleteMsg, addMsg, inputMsg, MSG} from "../../../src/app2/js/update";
import defaultModel from "../../../src/app2/js/model";

describe("App2 update", () => {
    let change;
    let model;
    let html;

    describe("Msg functions", () => {
        it("deleteMsg", () => {
            const index = 1;
            expect(deleteMsg(index)).toStrictEqual({
                type: MSG.DEL,
                index
            });
        });

        it("addMsg", () => {
            expect(addMsg()).toStrictEqual({
                type: MSG.ADD
            });
        });

        it("inputMsg", () => {
          const text = "LOL";
            expect(inputMsg(text)).toStrictEqual({
                type: MSG.INPUT,
                text
            });
        });
    });

    describe("Update function", () => {
        it("delete", () => {
            const index = 1;
            const msg = deleteMsg(index);

            const result = update(msg, defaultModel);
            const expected = {
                tasks: [
                    { name: "Do something", done: false }
                ],
                name: '',
                done: false
            };

            expect(result).toStrictEqual(expected);
        });

        it("add", () => {
            const index = 1;
            const msg = addMsg(index);
            const newTask = { name: "New task", done: false };
            const model = { ...defaultModel, ...newTask  };

            const result = update(msg, model);
            const expected = {
                ...model,
                tasks: [ ...defaultModel.tasks, newTask ]
            };

            expect(result).toStrictEqual(expected);
        });

        it("input", () => {
            const newInput = "LOL";
            const msg = inputMsg(newInput);

            const result = update(msg, defaultModel);
            const expected = {
                ...defaultModel,
                name: newInput
            };

            expect(result).toStrictEqual(expected);
        });
    });
});
