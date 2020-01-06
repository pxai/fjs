import hh from "hyperscript-helpers";
import { h }from "virtual-dom";
const { div, p, button } = hh(h);

function view (change, model) {
    return div({style: `background-color: ${model}`}, [
            p(`Selected color: ${model}`),
            div([
                button({onclick: () => change("red")}, 'Set Red'),
                button({onclick: () => change("green")}, 'Set Green'),
                button({onclick: () => change("blue")}, 'Set Blue')
            ])
        ]
    );
}

function update (value, model) {
    if (["red","green","blue"].includes(value)) {
        return value;
    }

    return model;
}

export { view, update };