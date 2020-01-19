const character = {
  attributes: {
    dex: 10,
    int: 16,
    str: 12
  },
  name: "Dean Dan",
  race: "Orc",
  weapon: {
    damage: 10,
    name: "SkullCrusher"
  }
};

const modified = Object.assign(character, {name: "Me"});

console.log(modified);
const ordinaryBloke = {...character, race: "white guy", name: "Joe"};

console.log(ordinaryBloke);
