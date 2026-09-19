const fs = require("fs")
const deckFile = fs.readFileSync("deck.json", { encoding: 'utf8', flag: 'r' });
const deck = JSON.parse(deckFile)

const pullCard = document.getElementById("pull-card")

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

