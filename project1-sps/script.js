// HELPER FUNCTION to randomly generate number 1, 2 or 3
var generateNumber = function () {
  var randomDecimal = Math.random() * 3;
  var randomInteger = Math.floor(randomDecimal);
  var randomNumber = randomInteger + 1;
  return randomNumber;
};
// END OF HELPER FUNCTION
var currentGameMode = "inputName";
var userName = "";
var numUserWins = 0;
var numComputerWins = 0;
var numDraws = 0;

var main = function (input) {
  var myOutputValue;
  if (currentGameMode == "inputName") {
    userName = input;
    currentGameMode = "SPS";
    myOutputValue = `Hello ${userName}, nice to meet you! <br> 
  Let's play! <br> Please choose scissors, paper or stone.`;
  } else if (currentGameMode == "SPS") {
    var userChoice = input;
    var randomNumber = generateNumber();
    // assign randomNumber to gameChoice scissors, paper or stone
    var gameChoice;
    if (randomNumber == 1) {
      gameChoice = "scissors";
    } else if (randomNumber == 2) {
      gameChoice = "paper";
    } else if (randomNumber == 3) {
      gameChoice = "stone";
    }

    // output = You've won! || You've lost. || It's a draw.
    // if input == gameChoice then output is `It's a draw!`
    // if input is scissors and gameChoice is paper then output is `You've won!`
    // if input is paper and gameChoice is stone then output is `You've won!`
    // if input is stone and gameChoice is scissors then output is `You've won!`

    if (userChoice == gameChoice) {
      numDraws += 1;
      myOutputValue = `It's a draw, ${userName}! <br> You both chose ${userChoice}. <br> 
    <br> Game results: <br> Won: ${numUserWins} <br> Draw: ${numDraws} <br> Lost: ${numComputerWins} <br> <br> Play again to win!`;
    } else if (
      (userChoice == "scissors" && gameChoice == "paper") ||
      (userChoice == "paper" && gameChoice == "stone") ||
      (userChoice == "stone" && gameChoice == "scissors")
    ) {
      numUserWins += 1;
      myOutputValue = `You've won, ${userName}! <br> You chose ${userChoice}. <br> Your opponent chose ${gameChoice}. <br> <br> Game results: <br> Won: ${numUserWins} <br> Draw: ${numDraws} <br> Lost: ${numComputerWins} <br> <br> Awesome! Play again :) `;
    } else {
      numComputerWins += 1;
      myOutputValue = `Oh no, ${userName}, you've lost. <br> You chose ${userChoice}. <br> Your opponent chose ${gameChoice}. <br> <br> Game results: <br> Won: ${numUserWins} <br> Draw: ${numDraws} <br> Lost: ${numComputerWins} <br> <br> Don't give up, try again!`;
    }
    console.log(gameChoice);
  }
  return myOutputValue;
};
