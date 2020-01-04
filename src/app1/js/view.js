import h from "hyperscript";
import hh from "hyperscript-helpers"
const { div } = hh(h);

function view (model) {
    console.log("model: ", model);
    return div(model.content)
}

export default view;