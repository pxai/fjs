const character = {
  name: "Dean Dan",
  race: "Orc"
};


const armedCharacter = {
  ...character,
  weapon: "Hammer"
};

/*
{
  name: "Dean Dan",
  race: "Orc",
  weapon: "Hammer"
}
 */

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

/*
{
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
}
*/

const newAttribute = "class";
const awesome = {
  ...complete,
  [newAttribute]: "Paladin"
};

/*
{
  attributes: {
    dex: 10,
    int: 16,
    str: 12
  },
  class: "Paladin",
  name: "Dean Dan",
  race: "Orc",
  weapon: {
    damage: 10,
    name: "SkullCrusher"
  }
}
 */
