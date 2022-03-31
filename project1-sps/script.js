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
    gameChoice = "Scissors";
  } else if (randomNumber == 2) {
    gameChoice = "Paper";
  } else if (randomNumber == 3) {
    gameChoice = "Stone";
  }

  // output = You've won! || You've lost. || It's a draw.
  // if input == gameChoice then output is `It's a draw!`
  // if input is scissors and gameChoice is paper then output is `You've won!`
  // if input is paper and gameChoice is stone then output is `You've won!`
  // if input is stone and gameChoice is scissors then output is `You've won!`
  var myOutputValue;

  if (userChoice == gameChoice) {
    myOutputValue = `It's a draw!`;
  } else if (
    (userChoice == "Scissors" && gameChoice == "Paper") ||
    (userChoice == "Paper" && gameChoice == "Stone") ||
    (userChoice == "Stone" && gameChoice == "Scissors")
  ) {
    myOutputValue = `You've won!`;
  } else {
    myOutputValue = `You've lost. Try again.`;
  }
  console.log(gameChoice);
  return myOutputValue;
};
