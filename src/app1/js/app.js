import h from "hyperscript";
import hh from "hyperscript-helpers"

const { div } = hh(h);

function view (model) {
    console.log("model: ", model);
    return div(model.content)
}

const rootNode = document.getElementById("app");
console.log(rootNode,"Ea")

rootNode.appendChild(view({content: "Hello World"}));

console.log("Joder!!!");