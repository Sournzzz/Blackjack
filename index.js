const pullCard = document.getElementById("pull-card");
const gameSetupForm = document.getElementById("game-setup");
const deck = await getDeck();

async function setupGame(event) {
  event.preventDefault();
  const setupInfo = new FormData(gameSetupForm);
  const gameRounds = setupInfo["input_rounds"]
  const playerBalance = setupInfo["input_starting_balance"];

  const roundText = document.createElement("p");
  const playerBalance = document.createElement("p");
}

async function getDeck() {
  const response = await fetch('./deck.json')
  const deck = await response.json()

  return deck
}

function getCard() {
  const suits = Object.keys(deck)
  const random_suit = suits[Math.floor(Math.random() * suits.length)]
  const random_card = { [random_suit]: deck[random_suit][Math.floor(Math.random() * deck[random_suit].length)] };

  displayCard(random_card)
};

function displayCard(card) {
  const spades_symbol = "\u2660";    // ♠
  const hearts_symbol = "\u2665";    // ♥
  const diamonds_symbol = "\u2666";  // ♦
  const clubs_symbol = "\u2663";     // ♣
  let suit;

  let documentCard = document.getElementById("card1");
  const suitCard = document.createElement("p");
  const valueCard = document.createElement("p");

  switch (Object.keys(card)[0]) {
    case "spades":
      suit = spades_symbol;
      break
    case "hearts":
      suit = hearts_symbol;
      break
    case "diamonds":
      suit = diamonds_symbol;
      break
    case "clubs":
      suit = clubs_symbol;
      break;
    default:
      suit = `${card} is not an avaiable card on the deck`;
      break
  }
  suitCard.textContent = suit;
  valueCard.textContent = Object.values(card)[0];
  documentCard.appendChild(suitCard);
  documentCard.appendChild(valueCard);
}

pullCard.addEventListener("click", getCard)



