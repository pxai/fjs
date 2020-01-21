const wizards = ["Gandalf", "Rincewind", "Merlin", "Radagast"];

const changed = Object.assign([], wizards, {[2]: "Raistlin"});
// ["Gandalf", "Rincewind", "Raistlin", "Radagast"]

// copyWithin() or fill() ?? ARGH NO!
