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

const { weapon, ...unarmed } = character;
/*
unarmed:
 {
  attributes: {
    dex: 10,
    int: 16,
    str: 12
  },
  name: "Dean Dan",
  race: "Orc"
}
 */

const { weapon, attributes, ...basic } = character;

/*
discount:
{
  name: "Dean Dan",
  race: "Orc"
}
 */

const {
  attributes : { int: intelligence },
  weapon: { damage }
} = character;

// intelligence: 16
// damage: 10
