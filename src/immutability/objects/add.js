const character = {
  name: "Dean Dan",
  race: "Orc"
};

console.log(character);

const armedCharacter = {
  ...character,
  weapon: "Hammer"
};

console.log(armedCharacter);


const weapon = {
  name: "SkullCrusher",
  damage: 10
};

const attributes = {
  str: 12, int: 16, dex: 10
};


const complete = {
  ...{...armedCharacter, weapon },
      attributes
};

console.log(complete);

const newAttribute = "class";
const awesome = {
  ...complete,
  [newAttribute]: "Paladin"
};

console.log(awesome);
