//HELPER FUNCTION
var generateNumber = function () {
  //  return 1;
  var randomDecimal = Math.random() * 3;
  var randomInteger = Math.floor(randomDecimal);
  var randomNumber = randomInteger + 1;
  return randomNumber;
};
// END OF HELPER FUNCTION
var numberOfRemainingGuesses = 2;

var secretWordBaseMain = function (input) {
  // Complete the Base: Secret Word exercise below with secretWordBaseMain as the main function.
  // guess correct twice in total
  // message `You guessed "". The secret word was "". You have xx guesses left to win.`
  var gameChoice = generateNumber();
  // 1 - banana, 2-chisel, 3-faucet
  var secretWord;
  if (gameChoice == 1) {
    secretWord = "banana";
  } else if (gameChoice == 2) {
    secretWord = "chisel";
  } else if (gameChoice == 3) {
    secretWord = "faucet";
  }
  var myOutputValue;

  if (input == secretWord) {
    numberOfRemainingGuesses -= 1;
    myOutputValue = `You guessed ${input}. The secret word was ${secretWord}. You have ${numberOfRemainingGuesses} guesses left to win.`;

    if (numberOfRemainingGuesses == 0) {
      myOutputValue = `You have won the game!`;
    }
  } else {
    myOutputValue = `You guessed ${input}. Your guess is incorrect. Try again.`;
  }
  console.log(secretWord);
  return myOutputValue;
};

var numberOfRemainingGuesses = 2;
var secretWordTwiceRowMain = function (input) {
  // Complete the Comfortable: Secret Word Twice in a Row exercise below with secretWordTwiceRowMain as the main function.
  // reset if wrong
  //  if correct +1, if correct "you won", reset

  var gameChoice = generateNumber();

  var secretWord;
  if (gameChoice == 1) {
    secretWord = "banana";
  } else if (gameChoice == 2) {
    secretWord = "chisel";
  } else if (gameChoice == 3) {
    secretWord = "faucet";
  }
  var myOutputValue;

  if (input == secretWord) {
    numberOfRemainingGuesses -= 1;
    myOutputValue = `You guessed ${input}. The secret word was ${secretWord}. Guess one more time correctly to win the game!`;

    if (numberOfRemainingGuesses == 0) {
      myOutputValue = `You have won the game!`;
    }
  } else {
    myOutputValue = `You guessed ${input}. Your guess is incorrect. Try again.`;
    numberOfRemainingGuesses = 2;
  }
  console.log(secretWord);
  return myOutputValue;
};

var secretWordXRowMain = function (input) {
  // Complete the Comfortable: Secret Word X in a Row exercise below with secretWordXRowMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var diceWithinMain = function (input) {
  // Complete the More Comfortable: Dice Within exercise below with diceWithinMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var diceWithin2DiceMain = function (input) {
  // Complete the More Comfortable: Dice Within with 2 Dice exercise below with diceWithin2DiceMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var dice4DMain = function (input) {
  // Complete the More Comfortable: Dice 4D exercise below with dice4DeMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var secretWordTwice2Main = function (input) {
  // Complete the More Comfortable: Secret Word Twice in a Row 2 exercise below with secretWordTwice2Main as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};
