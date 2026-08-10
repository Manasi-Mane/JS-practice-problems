// Problem 6 – Cricket Players
const players = [
  { id: 1, name: "Virat", runs: 12000 },
  { id: 2, name: "Rohit", runs: 9800 },
  { id: 3, name: "Gill", runs: 2500 },
  { id: 4, name: "KL Rahul", runs: 5200 }
];
// •	Tasks:
// 51.	Print player names.
players.forEach(player=>console.log(player.name));  

// 52.	Find players with more than 5000 runs.
const highRunPlayers = players.filter(player=> player.runs>5000);
console.log(highRunPlayers);

// 53.	Find the highest run scorer.
const highestRunScorer = players.reduce((max,curr)=> curr.runs>max.runs?curr:max,players[0]);
console.log(highestRunScorer);

// 54.	Calculate total runs.
const totalRuns = players.reduce((acc,curr)=> acc+curr.runs,0);
console.log(totalRuns);

// 55.	Find average runs.
const averageRuns = totalRuns/players.length;
console.log(averageRuns);


// 56.	Add 500 runs to every player.
const playersWithBonusRuns = players.map(player=>({
    ...player,
    runs: player.runs + 500
}));
console.log(playersWithBonusRuns);

// 57.	Add a new player.
const newPlayer = {id:5, name:"Shubman", runs:3000};
const updatedPlayers = [...players,newPlayer];
console.log(updatedPlayers);

// 58.	Destructure name and runs.
const {name:firstPlayerName, runs:firstPlayerRuns} = players[0];
console.log(firstPlayerName, firstPlayerRuns);

// 59.	Find player with id = 1.
console.log(players.find(player=>player.id===1));


// 60.	Create an array containing only player names.
const playerNames = players.map(player=> player.name);
console.log(playerNames);
