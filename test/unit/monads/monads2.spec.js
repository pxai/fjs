import {
    getTrackingId,
    getData,
    findOrder,
    getOrderTracking,
    renderTemplate
  } from "./monads2";
  import Maybe from "./maybe";
  
  it("Should return stuff", () => {
    expect(Maybe(1)).toEqual({ value: 1 });
  });
  
  it("Should return stuff", () => {
    expect(getData("id")({ id: 666 })).toEqual(666);
  });
  
  it("Should return stuff", () => {
    expect(typeof getTrackingId({ id: 666 })).toBe("object");
  });
  
  it("Should return a maybe", () => {
    expect(getTrackingId({ id: 666 })).toEqual(Maybe(666));
  });
  
  it("Should return stuff", () => {
    const order = { id: 666, text: "Ok" };
    expect(findOrder()).toEqual(Maybe(order));
  });
  
  it("Should return order tracking", () => {
    expect(getOrderTracking()).toEqual(Maybe(Maybe(666)));
  });
  
  it("Should return order template for given id", () => {
    expect(renderTemplate(666)).toBe(`<div>Order: 666</div>`);
  });