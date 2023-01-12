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

for (const [i, player] of game.scored.entries()) {
  console.log(`Goal ${i + 1}:${player}`);
}

const odds = Object.values(game.odds);
let average = 0;
for (const odd of odds) average += odd;
average /= odds.length;
console.log(`Average ${average}`);

for (const [team, odd] of Object.entries(game.odds)) {
  const teanStr = team === "x" ? " drawn" : `Victoriy ${game[team]}`;
  console.log(`Odd of ${teanStr} ${odd}`);
}
