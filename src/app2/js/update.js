export const MSG = {
  ADD: "add",
  DEL: "delete",
  INPUT: "input"
};

export function deleteMsg(index) {
    return {
        type: MSG.DEL,
        index
    }
}

export function inputMsg(text) {
    return {
        type: MSG.INPUT,
        text
    }
}

export function addMsg() {
    return {
        type: MSG.ADD
    }
}

export function update(msg, model) {
    switch (msg.type) {
        case MSG.DEL:
            return {
                ...model,
                tasks: model.tasks.filter((task, i) => i !== msg.index)
            };
        case MSG.INPUT:
            return { ...model, name: msg.text }
        case MSG.ADD:
            const task = { name: model.name, done: false };
            return {
                ...model,
                tasks: [...model.tasks, task]
            };
        default:
            return model;
    }

}

export default update;
