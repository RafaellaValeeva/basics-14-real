// GLOBAL VARIABLES
var currentGameMode = "dealingCards";
// variables to count results section
var playerSum;
var computerSum;

var playerHand = [];
var computerHand = [];

var playerScore = 0;
var computerScore = 0;

var newShuffle;

var numUserWins = 0;
var numComputerWins = 0;
var numDraws = 0;

// HELPER FUNCTIONS

var playerCardOutputMessage = function (playerHand) {
  var message = "Player:";
  playerScore = 0;

  for (var i = 0; i < playerHand.length; i += 1) {
    message += ` ${playerHand[i].name} of ${playerHand[i].suit} `;
    playerScore += playerHand[i].rank;
  }
  message += `<br> Player score: ${playerScore}`;
  return message;
};

//
var computerCardOutputMessage = function (computerHand) {
  var message = "Dealer:";
  computerScore = 0;

  for (var i = 0; i < computerHand.length; i += 1) {
    message += ` ${computerHand[i].name} of ${computerHand[i].suit} `;
    computerScore += computerHand[i].rank;
  }
  message += `<br> Dealer score: ${computerScore}`;
  return message;
};

// CREATE CARD DECK
var makeDeck = function () {
  var cardDeck = [];
  var suits = [" ♥️ ", " ♦️ ", " ♣️ ", " ♠️ "];

  for (var i = 0; i < suits.length; i += 1) {
    var currentSuit = suits[i];

    for (var rankCounter = 1; rankCounter <= 13; rankCounter += 1) {
      var cardName = rankCounter;
      var cardRank = rankCounter;

      if (cardName == 1) {
        cardName = "A";
      } else if (cardName == 11) {
        cardName = "J";
        cardRank = 10;
      } else if (cardName == 12) {
        cardName = "Q";
        cardRank = 10;
      } else if (cardName == 13) {
        cardName = "K";
        cardRank = 10;
      }

      var card = {
        name: cardName,
        suit: currentSuit,
        rank: cardRank
      };

      cardDeck.push(card);
    }
  }
  return cardDeck;
};

// SHUFFLE CARDS
var getRandomIndex = function (max) {
  return Math.floor(Math.random() * max);
};

var shuffleCards = function (cardDeck) {
  var currentIndex = 0;
  while (currentIndex < cardDeck.length) {
    var randomIndex = getRandomIndex(cardDeck.length);
    var randomCard = cardDeck[randomIndex];
    var currentCard = cardDeck[currentIndex];
    cardDeck[currentIndex] = randomCard;
    cardDeck[randomIndex] = currentCard;
    currentIndex = currentIndex + 1;
  }
  return cardDeck;
};
// END OF HELPER FUNCTIONS

// Gamemode 1: 2 cards each
// Gamemode 2: Player decides HIT or STAND
// IF hit = result + 1 more card ; IF stand = result same
// Gamemode 3: Computer + 1 card if result < 17
// Gamemode 4: Score: if result > 21 output is lose // J/Q/K/A = 10
// player result > computer result then player wins
// difference player < difference computer && < 21 output is win
// result == 21 output is win

var main = function (input) {
  var myOutputValue = "";

  // GAMEMODE 1
  if (currentGameMode === "dealingCards") {
    // deal 2 cards each
    var newDeck = makeDeck();
    newShuffle = shuffleCards(newDeck);

    for (var i = 0; i < 2; i += 1) {
      playerHand.push(newShuffle.pop());
      computerHand.push(newShuffle.pop());
    }
    console.log(playerHand, computerHand);

    myOutputValue = ` ${playerCardOutputMessage(
      playerHand
    )} <br> <br> ${computerCardOutputMessage(computerHand)}
    <br> <br>Player, please input "hit" or "stand" and click the Submit button.`;

    currentGameMode = "playerChoice"; // CHANGING TO GAMEMODE 2
    // Gamemode 2: Player decides HIT or STAND
    // IF hit = result + 1 more card ; IF stand = result same
  } else if (currentGameMode === "playerChoice") {
    if (input === "hit") {
      playerHand.push(newShuffle.pop());
      console.log(playerHand);
      myOutputValue = ` ${playerCardOutputMessage(
        playerHand
      )} <br> <br> Choose to "hit" or "stand".`;
      if (playerScore >= 21) {
        currentGameMode = "computerChoice";
        myOutputValue = `${playerCardOutputMessage(playerHand)}`;
      }
    } else if (input === "stand") {
      // if choice is stand
      currentGameMode = "computerChoice"; // CHANGING TO GAMEMODE 3
      myOutputValue = `You chose to stand.<br> <br> ${playerCardOutputMessage(
        playerHand
      )} <br> <br> 
      Click Submit to see the Dealer's score.`;
    } else {
      return `Please input a valid choice. You can choose "hit" or "stand". <br> (case sensitive)`;
    }

    //GAMEMODE 3: Computer + 1 card if result < 17
  } else if (currentGameMode === "computerChoice") {
    if (computerScore < 17) {
      computerHand.push(newShuffle.pop());
      console.log(computerHand);
      myOutputValue = `${computerCardOutputMessage(computerHand)} <br> <br> 
      Click Submit to see the final score.`;
    } else {
      myOutputValue = `Dealer stands. <br> <br> Dealer score is: ${computerScore} <br> <br> Click Submit to see the final score.`;
    }

    currentGameMode = "gameResults"; // CHANGING TO GAMEMODE 4
    // Gamemode 4 Scores
    // Draw: Player = Computer OR Player is 21 and Comp is 21 OR Player > 21 and Comp > 21
    // Player Wins: Player ===21 || Player > Comp && < 21 || Comp > 21 && Player < 21
    // Lose: else
  } else if (currentGameMode === "gameResults") {
    console.log("im runnng");
    if (
      playerScore === computerScore ||
      (playerScore === 21 && computerScore === 21) ||
      (playerScore > 21 && computerScore > 21)
    ) {
      myOutputValue = `It's a draw! <br> <br> Results <br> Player: ${playerScore} <br> Dealer: ${computerScore} <br> <br>
      Refresh the page to play again! `;
    } else if (
      playerScore === 21 ||
      (playerScore > computerScore && playerScore < 21) ||
      (computerScore > 21 && playerScore < 21)
    ) {
      myOutputValue = `Congratulations, you have won! ❤️‍🔥 <br> <br> Results <br> Player: ${playerScore} <br> Dealer: ${computerScore}<br> <br>
      Refresh the page to play again!`;
    } else {
      myOutputValue = `Oh no, you have lost. 💔 <br> <br> Results <br> Player: ${playerScore} <br> Dealer: ${computerScore}<br> <br>
      Refresh the page to play again!`;
    }
  }
  console.log(myOutputValue);
  return myOutputValue;
};
