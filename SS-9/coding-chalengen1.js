const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dormund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muler",
      "Gnalrby",
      "Lewandowshi",
    ],
    [
      "Neuer2",
      "Pavard2",
      "Martinez2",
      "Alaba2",
      "Davies2",
      "Kimmich2",
      "Goretzka2",
      "Coman2",
      "Muler2",
      "Gnalrby2",
      "Lewandowshi2",
    ],
  ],
  score: "4.0",
  scored: ["Lewandowshi", "Gnalrby", "Lewandowshi", "Muller2"],
  date: "Nov 9th , 2023",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
const [players1, players2] = game.players;
console.log(players1, players2);

const [gk, ...fielsPlayers] = players1;
console.log(gk, fielsPlayers);

const allPlayes = [...players1, ...players2];
console.log(allPlayes);

const players1Final = [...players1, "Giang", "Chien", "Phuong"];
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

const printGoals = function (...players) {
  console.log(players);
  console.log(`${players.length}`);
};
printGoals(...game.scored);
team1 > team2 && console.log("Team1 chiến thắng");
team2 > team1 && console.log("Team2 chiến thắng ");
