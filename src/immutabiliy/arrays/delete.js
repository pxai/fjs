const wizards = ["Gandalf", "Rincewind", "Merlin", "Haplo"];

// wizards.splice(-1);
console.log(wizards);

const allButLastWizard = wizards.slice(0, -1);
console.log(allButLastWizard);

const lastWizard = wizards.slice(-1)[0] //.pop();
console.log(lastWizard);

const [first, ...others] = wizards;
console.log(first, others);

const [,second,,fourth] = wizards;
console.log(second, fourth);

// last not possible
