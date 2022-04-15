var emojiNumberCharactersMain = function (input) {
  // // Complete the Base: Emoji Drawing Number of Characters exercise below with emojiNumberCharactersMain as the main function.
  var myOutputValue = "";

  for (var rowCounter = 0; rowCounter < input; rowCounter++) {
    myOutputValue += "😀";
    console.log(myOutputValue);
  }
  return myOutputValue;
};

var emojiSquareMain = function (input) {
  // Complete the Base: Emoji Drawing Square exercise below with emojiSquareMain as the main function.
  var myOutputValue = "";

  for (var rowCounter = 0; rowCounter < input; rowCounter++) {
    for (var columnCounter = 0; columnCounter < input; columnCounter++) {
      myOutputValue += "😀";
    }
    myOutputValue += "<br>";
    console.log(myOutputValue);
  }
  return myOutputValue;
};

var emojiTriangleMain = function (input) {
  // Complete the Comfortable: Emoji Drawing Triangle exercise below with emojiTriangleMain as the main function.
  var myOutputValue = "";
  //var sideLength = Number(input);
  for (var rowCounter = 0; rowCounter < input; rowCounter++) {
    // Change the inner loop to only run outerCounter number of times
    // This means that we only have as many 👍 on each line as the current row index.
    // To ensure we always print the last emoji on each row, change the inner loop
    // conditional to use <= instead of <.
    for (var columnCounter = 0; columnCounter <= rowCounter; columnCounter++) {
      myOutputValue += "😀";
    }
    myOutputValue += "<br>";
    console.log(myOutputValue);
  }
  return myOutputValue;
};

var emojiOutlineSquareMain = function (input) {
  // Complete the More Comfortable: Emoji Drawing Outline Square exercise below with emojiOutlineSquareMain as the main function.
  var myOutputValue = "";
  for (var rowCounter = 0; rowCounter < input; rowCounter++) {
    for (var columnCounter = 0; columnCounter < input; columnCounter++) {
      // If current iteration represents a border element, draw ✊ instead.
      if (
        rowCounter == 0 ||
        rowCounter == input - 1 ||
        columnCounter == 0 ||
        columnCounter == input - 1
      ) {
        myOutputValue += "✊";
      } else {
        // Add a 😀 to the current row
        myOutputValue += "😀";
      }
    }
    // Insert a line break to start a new row
    myOutputValue += "<br>";
  }
  return myOutputValue;
};

var emojiCenterSquareMain = function (input) {
  // Complete the More Comfortable: Emoji Drawing Center Square exercise below with emojiCenterSquareMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var multiDiceBaseMain = function (input) {
  // Complete the Base: Multi-Dice Game exercise below with multiDiceBaseMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var multiDiceMultiRoundMain = function (input) {
  // Complete the More Comfortable: Multi-Round Multi-Dice Game exercise below with multiDiceMultiRoundMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var multiDiceTwoPlayerMain = function (input) {
  // Complete the More Comfortable: Two Player Multi-Round Multi-Dice Game exercise below with multiDiceTwoPlayerMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var multiDiceMultiPlayerMain = function (input) {
  // Complete the More Comfortable: Multi-Player Multi-Round Multi-Dice Game exercise below with multiDiceMultiPlayerMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};
