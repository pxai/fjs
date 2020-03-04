import { idStream, elementStream } from "../../../../src/functors/eventstream/eventstream";

describe("EventStream", () => {
  let windowRef;
  beforeEach(() => {
    windowRef = global.window;
    global.document.body.innerHTML = `<div id="app">
      <h1 id="myH1">Event Stream samples</h1>
      <p id="myP">This contain a sample of the event stream</p>
    </div>`;
  });

  afterEach(() => {
    global.window = windowRef;
  });

  describe("idStream", () => {
    it("should be an object", () => {
      expect(typeof idStream).toBe("object");
    });

    it("should call onValue", () => {
      idStream.onValue = jest.fn();
      global.document.querySelector("#app").click();
      expect(idStream.onValue).toHaveBeenCalledWith("");
    });
  });

  describe("elementStream", () => {
    it("should be an object", () => {
      expect(typeof elementStream).toBe("object");
    });
  });
});