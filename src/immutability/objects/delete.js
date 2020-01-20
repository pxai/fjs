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

//const { weapon, ...unarmed } = character;
//console.log(unarmed);

//const { weapon, attributes, ...basic } = character;

//console.log(basic);

const {
  attributes : { int: intelligence },
  weapon: { damage }
} = character;

console.log(intelligence, damage);
