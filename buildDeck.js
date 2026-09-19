const fs = require("fs")

const suits = ["spades", "clubs", "hearts", "diamonds"];
const ranks = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];

function build_deck() {

  try {
    let deck = {};

    for (let i = 0; i < suits.length; i++) {
      deck[suits[i]] = ranks;
    }

    fs.writeFileSync("deck.json", JSON.stringify(deck, null, 1), 'utf-8');
    return "all good sir"

  }

  catch (err) {
    return err;
  }
}

console.log(build_deck())
