const wizards = ["Gandalf", "Rincewind", "Merlin", "Haplo"];

// wizards.splice(-1);  ARGH NO!!

const allButLastWizard = wizards.slice(0, -1);
// ["Gandalf", "Rincewind", "Merlin"]

const lastWizard = wizards.slice(-1)[0] //.pop()? ARGH NO!
// "Haplo"

const [first, ...others] = wizards;   // shift?  ARG NO!
// "Gandalf" ["Rincewind", "Merlin", "Haplo"]

const [,second,,fourth] = wizards;
// [,"Rincewind",,"Haplo"]

