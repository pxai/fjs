function update (value, model) {
    if (["red","green","blue"].includes(value)) {
        return value;
    }

    return model;
}

export default update;