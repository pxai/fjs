const wizards = ["Gandalf", "Rincewind", "Merlin", "Radagast"];

const changed = Object.assign([], wizards, {[2]: "Raistlin"});

console.log(changed);
