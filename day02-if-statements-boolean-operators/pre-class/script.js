var orangeJuiceMain = function (numberOfGuests) {
  // Attempt the Orange Juice Calculator exercise from the Functions II module below with orangeJuiceMain as the main function.
  var numberOfOranges = numberOfGuests * 2 * 4;
  var myOutputValue = `For this party you will need at least ${numberOfOranges} oranges.`;
  return myOutputValue;
};

var orangeJuiceMain = function (numGuest) {
  // Attempt the Orange Juice Calculator exercise from the Functions II module below with orangeJuiceMain as the main function.
  var orangesPerGlass = 4;
  var glassesPerGuest = 2;
  var numGlasses = numGuest * glassesPerGuest;
  var numOranges = numGlasses * orangesPerGlass;
  var myOutputValue = `${numOranges} oranges are needed.`;
  return myOutputValue;
};

var paintMain = function (pricePerLitre) {
  // Attempt the House Paint exercise from the Functions II module below with paintMain as the main function.
  var numberOfRooms = 6;
  var areaOfRoom = 3 * 3;
  var numberOfCoats = 2;
  var areaToPaint = numberOfRooms * areaOfRoom * numberOfCoats;

  var areaPerLitre = 300;
  var litreUsed = areaToPaint / areaPerLitre;
  var cost = litreUsed * pricePerLitre;

  var myOutputValue = `It will cost $${cost} to paint the house.`;

  return myOutputValue;
};

var randomDiceMain = function (input) {
  // Attempt the Random Dice Rolls exercise from the Intro to Logic and Control Flow module below with randomDiceMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var secretPhraseMain = function (input) {
  // Attempt the Secret Phrase exercise from the If, Else, Else If module below with secretPhraseMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var diceGameMain = function (input) {
  // Attempt the Dice Game exercise from the If, Else, Else If module below with diceGameMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var twiceGuessMain = function (input) {
  // Attempt the Twice the Guess exercise from the If, Else, Else If module below with twiceGuessMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};
