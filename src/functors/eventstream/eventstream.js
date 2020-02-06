// eventStream: run a function everytime something happens
// Bacon: eventStream library, event delegation
// id stream
const id_s = map(function (event) { return "#"+ event.id}, Bacon.fromEventTarget(document, "click"))
// EventStream(String) : an event stream of string, lazy, just starts a suscription

id_s.onValue(function(id){ console.log("You clicked ", id)}) // here starts listening

// element stream of elements
const element_s = map(document.querySelector, id_s); // EventStream(Element)
element_s.onValue(function(element){ console.log("Inner is: ", element.innerHTML)}); // subscribe and start

// we can keep mapping and it keeps transforming the event stream
const hover_s = Bacon.fromEventTarget(document, "hover");
const element_s = map(compose(document.querySelector, get("id")), hover_s);
const postid_s = map(function(element){ return element.data("post-id")}, element_s );
const future_post_s = map(Api.getProductById, postid_s) // EventStream(Future(Post))

future_post_s.onValue(alert );




