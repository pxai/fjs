
import { view, update } from "./app";

function init(initModel, update, view, node) {
    let model = initModel;
    let currentView = view(change, model);
    rootNode.appendChild(currentView);

    function change (value) {
        model = update(value, model);
        const updatedView = view(change, model);
        node.replaceChild(updatedView, currentView);
        currentView = updatedView;
    }
}
const rootNode = document.getElementById("app");

init("orange", update, view, rootNode);
