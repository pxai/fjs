const wizards = ["Gandalf", "Rincewind", "Merlin"];

// wizards.push("Raistlin"); ARGH NO!

const moarWizards = [...wizards, "Raistlin"];
// ["Gandalf", "Rincewind", "Merlin", "Raistlin"]

const evenMoarWizards = ["Radagast", ...moarWizards];
// ["Radagast", "Gandalf", "Rincewind", "Merlin", "Raistlin"]

const others = [ "Haplo", "Alfred" ];
const assemble = [ ,,,"MyAss", ...wizards,, ...others ];

// [undefined, undefined, undefined, "MyAss", "Gandalf", "Rincewind", "Merlin", undefined, "Haplo", "Alfred"]
