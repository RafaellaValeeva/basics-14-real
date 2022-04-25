// Global variables:
var currentGameMode = "playerOneRolling";
var playerOneNumbers = [];
var playerTwoNumbers = [];
var playerOneResult;
var playerTwoResult;

// HELPER FUNCTION
var rollDice = function () {
  var randomDecimal = Math.random() * 6;
  var randomInteger = Math.floor(randomDecimal);
  var diceNumber = randomInteger + 1;
  return diceNumber;
};
// END OF HELPER FUNCTION

var main = function (input) {
  var myOutputValue = "";

  if (currentGameMode === "playerOneRolling") {
    var rollDice1 = rollDice();
    var rollDice2 = rollDice();
    playerOneNumbers[0] = rollDice1;
    playerOneNumbers[1] = rollDice2;
    myOutputValue = `Player One, you rolled ${rollDice1} and ${rollDice2}. <br> Please choose and input dice order 1 or 2 and click Submit.`;

    currentGameMode = "playerOneOrder"; // CHANGING TO GAMEMODE 2
  } else if (currentGameMode === "playerOneOrder") {
    if (Number.isNaN(Number(input)) || (input != 1 && input != 2)) {
      return `Please input a valid number. You can choose 1 or 2.`;
    }
    if (Number(input) === 1) {
      myOutputValue = `Player One, your number is ${playerOneNumbers[0]}${playerOneNumbers[1]}. <br> Now Player Two can click the Submit button to roll the dice.`;
      playerOneResult = `${playerOneNumbers[0]}${playerOneNumbers[1]}`;
    } else {
      myOutputValue = `Player One, your number is ${playerOneNumbers[1]}${playerOneNumbers[0]}. <br> Now Player Two can click the Submit button to roll the dice.`;
      playerOneResult = `${playerOneNumbers[1]}${playerOneNumbers[0]}`;
    }

    currentGameMode = "playerTwoRolling"; // CHANGING TO GAMEMODE 3
  } else if (currentGameMode === "playerTwoRolling") {
    var rollDice1 = rollDice();
    var rollDice2 = rollDice();
    playerTwoNumbers[0] = rollDice1;
    playerTwoNumbers[1] = rollDice2;
    myOutputValue = `Player Two, you rolled ${rollDice1} and ${rollDice2}. <br> Please choose and input dice order 1 or 2 and click Submit.`;

    currentGameMode = "playerTwoOrder"; // CHANGING TO GAMEMODE 4
  } else if (currentGameMode === "playerTwoOrder") {
    if (Number.isNaN(Number(input)) || (input != 1 && input != 2)) {
      return `Please input a valid number. You can choose 1 or 2.`;
    }
    if (Number(input) === 1) {
      myOutputValue = `Player Two, your number is ${playerTwoNumbers[0]}${playerTwoNumbers[1]}. <br> Press Submit to see the game results.`;
      playerTwoResult = `${playerTwoNumbers[0]}${playerTwoNumbers[1]}`;
    } else {
      myOutputValue = `Player Two, your number is ${playerTwoNumbers[1]}${playerTwoNumbers[0]}. <br> Press Submit to see the game results.`;
      playerTwoResult = `${playerTwoNumbers[1]}${playerTwoNumbers[0]}`;
    }

    currentGameMode = "gameResults"; // CHANGING TO GAMEMODE 5
  } else if (currentGameMode === "gameResults") {
    if (playerOneResult > playerTwoResult) {
      myOutputValue = `Player One has won! 🥇 <br> <br> Results <br> Player One: ${playerOneResult} <br> Player Two: ${playerTwoResult}`;
    } else if (playerOneResult === playerTwoResult) {
      myOutputValue = `It's a draw! <br> Results <br> Player One: ${playerOneResult} <br> Player Two: ${playerTwoResult}`;
    } else {
      myOutputValue = `Player Two has won! 🥇 <br> <br> Results <br> Player One: ${playerOneResult} <br> Player Two: ${playerTwoResult}`;
    }
  }
  return myOutputValue;
};
