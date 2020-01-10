

export function deleteMsg(index) {
    return {
        type: "delete",
        index
    }
}

export function inputMsg(text) {
    return {
        type: "input",
        text
    }
}

export function addMsg() {
    return {
        type: "add"
    }
}

function update(msg, model) {
    console.log("hey", msg, model);
    switch (msg.type) {
        case "delete":
            return {
                ...model,
                tasks: model.tasks.filter((task, i) => i !== msg.index)
            };
        case "input":
            return { ...model, name: msg.text }
        case "add":
            const task = { name: model.name, done: false };
            console.log("New task: ", task);
            return {
                ...model,
                tasks: [...model.tasks, task]
            };
        default:
            return model;
    }

}

export default update;