// HELPER FUNCTION to randomly generate number 1, 2 or 3
var generateNumber = function () {
  var randomDecimal = Math.random() * 3;
  var randomInteger = Math.floor(randomDecimal);
  var randomNumber = randomInteger + 1;
  return randomNumber;
};
// END OF HELPER FUNCTION

var main = function (input) {
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
  var myOutputValue;

  if (userChoice == gameChoice) {
    myOutputValue = `It's a draw! <br> You both chose ${userChoice}. <br> Play again to win! `;
  } else if (
    (userChoice == "scissors" && gameChoice == "paper") ||
    (userChoice == "paper" && gameChoice == "stone") ||
    (userChoice == "stone" && gameChoice == "scissors")
  ) {
    myOutputValue = `You've won! <br> You chose ${userChoice}. <br> Your opponent chose ${gameChoice}. <br> Play again :) `;
  } else {
    myOutputValue = `Oh no, you've lost. <br> You chose ${userChoice}. <br> Your opponent chose ${gameChoice}. <br> Try again!`;
  }
  console.log(gameChoice);
  return myOutputValue;
};
