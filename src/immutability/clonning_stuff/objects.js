const character = {
    name: "Dean Dan",
    race: "Orc",
    weapon: {
        name: "SkullCrusher",
        damage: 10
    }
};

const player1 = { ...character };
const player2 = Object.assign({}, character);

player1.name = "Pedro Gata";
player1.weapon.name = "Foehammer";
player2.name = "Juan Arkia";
player2.weapon.damage = 666;

/*
character:
{
  name: "Dean Dan",
  race: "Orc",
  weapon: [object Object] {
    damage: 666,
    name: "Foehammer"
  }
}

player1:
{
  name: "Pedro Gata",
  race: "Orc",
  weapon: [object Object] {
    damage: 666,
    name: "Foehammer"
  }
}

player2:
 {
  name: "Juan Arkia",
  race: "Orc",
  weapon: [object Object] {
    damage: 666,
    name: "Foehammer"
  }
}
 */



const player3 = JSON.parse(JSON.stringify(character));
// Issue with dates
player3.weapon.name = "Anduril";
console.log(character, player1, player2, player3);
/*
character, player1, player2 are the same but:
player3:
{
  name: "Dean Dan",
  race: "Orc",
  weapon:  {
    damage: 666,
    name: "Anduril"
  }
}
 */