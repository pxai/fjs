const wizards = ["Gandalf", "Rincewind", "Merlin"];

// wizards.push("Raistlin");
console.log(wizards);

const moarWizards = [...wizards, "Raistlin"];
console.log(moarWizards);

const evenMoarWizards = ["Radagast", ...moarWizards];
console.log(evenMoarWizards);

const others = [ "Haplo", "Alfred" ];
const assemble = [ ,,,"MyAss", ...wizards,, ...others ];

console.log(assemble);
