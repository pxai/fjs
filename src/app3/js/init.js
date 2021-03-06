import { diff, patch } from "virtual-dom";
import createElement from "virtual-dom/create-element";
import initModel from "./model";
import view from "./view";
import update from "./update";


function init(initModel, update, view, node) {
    let model = initModel;
    let currentView = view(change, model);
    let rootNode = createElement(currentView);
    node.appendChild(rootNode);

    function change (value) {
        model = update(value, model);
        const updatedView = view(change, model);
        const changes = diff(currentView, updatedView);
        rootNode = patch(rootNode, changes);
        currentView = updatedView;
    }
}
const rootNode = document.getElementById("app");

init(initModel, update, view, rootNode);