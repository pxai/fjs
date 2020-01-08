
export function deleteMsg(index) {
    return {
        type: "delete",
        index
    }
}

export function addTaskMsg(index) {
    return {
        type: "delete",
        index
    }
}

function update (msg, model) {
    switch (msg.type) {
        case "delete":
            return { 
                ...model, 
                tasks: model.tasks.filter((task,i) => i !== msg.index)
            };
        default:
        return model;
    }

}

export default update;