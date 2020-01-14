import expect from "expect";
import {deleteMsg, MSG} from "../../../src/app2/js/update";
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
    });
});
