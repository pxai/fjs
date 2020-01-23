const character = {
    name: "Dean Dan",
    race: "Orc",
    weapon: {
        name: "SkullCrusher",
        damage: 10
    }
};

const klone = obj => JSON.parse(JSON.stringify(obj));
const heroes = [klone(character), klone(character), klone(character)];

heroes[1].weapon.name = "Sting";
/*
heroes:
[ {
    ...
  weapon: {
    damage: 10,
    name: "SkullCrusher"
  }
}, {
    ...
  weapon: {
    damage: 10,
    name: "Sting"
  }
}, {
    ...
  weapon: {
    damage: 10,
    name: "SkullCrusher"
  }
}]
 */


heroes2 = Array.from(heroes);
// [...heroes]
// heroes.slice()
// [].concat(heroes)
// Array.from(heroes)
// loops?

heroes2[1].weapon.name = "Orcrist";

console.log(heroes);
/*
heroes change too, because is a shallow clone!!!:
[ {
    ...
  weapon: {
    damage: 10,
    name: "SkullCrusher"
  }
}, {
    ...
  weapon: {
    damage: 10,
    name: "Orcrist"
  }
}, {
    ...
  weapon: {
    damage: 10,
    name: "SkullCrusher"
  }
}]
 */