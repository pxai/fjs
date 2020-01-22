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
/*
{
  attributes: { ...},
  name: "Me",
  race: "Orc",
  weapon: { ... }
}
 */
const ordinaryBloke = {
  ...character,
    race: "white guy",
    name: "Joe",
    weapon: { ...character.weapon, name: "Open Palm" }
};


/*
ordinaryBloke:
{
  attributes: {...},
  name: "Joe",
  race: "white guy",
  weapon: {
    damage: 10,
    name: "Open Palm"
  }
}

 */
