import hh from "hyperscript-helpers";
import { h }from "virtual-dom";

const { 
    div, h1, button, pre,
    form, label, input,
    table, th, tr, td, a
 } = hh(h);

function view (change, model) {
    return div( [
            h1("Todo List"),
            taskForm(change, model),
            div([
                taskTable(change, model)
            ]),
            div([pre(JSON.stringify(model))])
        ]
    );
}

function taskForm(change, model) {
    return form([
        label("task"),
        input({
            type: 'text',
            value: model.task,
            oninput: e => change(e.target.value)
          }),
        button({
            type: 'button',
            onclick: console.log("clicked")
        }, "Save")
    ]);
}

function taskTable(change, model) {
    return table([
        tr([
            th("Task"), th("Done"), th("Del"),
        ]),
        model.tasks.map(taskRow(change))
    ])
}

function taskRow(change) {
    return function (task, index) {
        return tr([
            td(task.name),
            td(task.done),
            td([
                button({onclick: ()=> change(index)} , "Delete")
            ])
        ]);
    }
}

export default view;