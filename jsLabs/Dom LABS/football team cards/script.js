const footballTeam = {
  "team": "Juventus Future Stars",
  "year": 2025,
  "headCoach": "Massimiliano Allegri",
  "players": [
    {
      "name": "Andrea Belotti",
      "position": "forward",
      "isCaptain": true
    },
    {
      "name": "Dries Mertens",
      "position": "forward",
      "isCaptain": false
    },
    {
      "name": "Federico Chiesa",
      "position": "forward",
      "isCaptain": false
    },
    {
      "name": "Lorenzo Pellegrini",
      "position": "midfielder",
      "isCaptain": false
    },
    {
      "name": "Miralem Pjanic",
      "position": "midfielder",
      "isCaptain": false
    },
    {
      "name": "Paulo Dybala",
      "position": "midfielder",
      "isCaptain": false
    },
    {
      "name": "Manuel Locatelli",
      "position": "midfielder",
      "isCaptain": false
    },
    {
      "name": "Toni Kroos",
      "position": "midfielder",
      "isCaptain": false
    },
    {
      "name": "Giorgio Chiellini",
      "position": "defender",
      "isCaptain": false
    },
    {
      "name": "Leonardo Bonucci",
      "position": "defender",
      "isCaptain": false
    },
    {
      "name": "Danilo",
      "position": "defender",
      "isCaptain": false
    },
    {
      "name": "Wojciech Szczesny",
      "position": "goalkeeper",
      "isCaptain": false
    },
    {
      "name": "Gianluigi Donnarumma",
      "position": "goalkeeper",
      "isCaptain": false
    }
  ]
}

const team = document.getElementById("team");
const year = document.getElementById("year");
const headCoach = document.getElementById("head-coach");
const playerSelector = document.getElementById("players");
const cardsContainer = document.getElementById("player-cards");


team.textContent = footballTeam.team;
year.textContent = footballTeam.year;
headCoach.textContent = footballTeam.headCoach;


function createCard(player) {
  const card = document.createElement("div");
  card.classList.add("player-card");
  card.innerHTML = `
    <h2>${player.isCaptain ? "(Captain)" : ""} ${player.name}</h2>
    <p>Position: ${player.position}</p>
  `;
  return card;
}

function updateCards() {
  cardsContainer.innerHTML = "";
  let selectedPlayers;
  if (playerSelector.value === "all") {
    selectedPlayers = footballTeam.players;
  } else {
    selectedPlayers = footballTeam.players.filter(player => player.position === playerSelector.value);
  }
  selectedPlayers.forEach(player => {
    const card = createCard(player);
    cardsContainer.appendChild(card);
  });
}
playerSelector.addEventListener("change", updateCards);
updateCards();
