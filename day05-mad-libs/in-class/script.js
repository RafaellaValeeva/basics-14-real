var adjectives = [];

var getRandomIndex = function (arrayLength) {
  var randomIndex = Math.floor(Math.random() * arrayLength);
  return randomIndex;
};

var madLibsAdjectivesMain = function (input) {
  var myOutputValue;

  if (input == "create") {
    var randomIndex = getRandomIndex(adjectives.length);
    var randomAdjective = adjectives[randomIndex];
    var madLib = `You will never believe what I saw today! It was a ${randomAdjective} dog carrying a stick.`;
    myOutputValue = madLib;
  } else {
    var found = false; // default : NOT FOUND

    for (var index = 0; index < adjectives.length; index += 1) {
      // check if input and adj #index is same - if yes then true
      var currentWord = adjectives[index];
      if (input === currentWord) {
        found = true; // if we find it, FOUND
      }
    }
    if (!found) {
      adjectives.push(input); // only push into array if NOT FOUND
    }
    myOutputValue = adjectives;
  }

  //if (!found) =
  return myOutputValue;
};

var madLibsInputCreateMain = function (input) {
  // Complete the Comfortable: Input and Create Mode exercise below with madLibsInputCreateMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var madLibsMultipleWordsMain = function (input) {
  // Complete the Comfortable: Input Multiple Words exercise below with madLibsMultipleWordsMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var madLibsMultipleTypesMain = function (input) {
  // Complete the More Comfortable: Mad Libs Multiple Word Types exercise below with madLibsMultipleTypesMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var madLibsPopularMain = function (input) {
  // Complete the More Comfortable: Popular Mad Libs exercise below with madLibsPopularMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var madLibsSetsMain = function (input) {
  // Complete the More Comfortable: Sets of Mad Libs exercise below with madLibsSetsMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};
