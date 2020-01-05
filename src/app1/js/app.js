
import view from "./view";

const rootNode = document.getElementById("app");
console.log(rootNode,"Ea")

rootNode.appendChild(view({content: "Hello World"}));

console.log("Ok it works");