var convertKmToMiles = function (distanceInKm) {
  var distanceInMiles = distanceInKm * 0.62;
  return distanceInMiles;
};

var main = function (input) {
  var myOutputValue = convertKmToMiles(input);
  return myOutputValue;
};

var main = function (input) {
  var myOutputValue = "hello world";
  return myOutputValue;
};

var greetingMain = function (input) {
  // Attempt the Greeting Program exercise from the Our First Program module below with greetingMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var metricMain = function (input) {
  // Attempt the Metric Conversion Program exercise from the Our First Program module below with metricMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var functionsExampleMain = function (input) {
  // Attempt the Base: Run Example Code exercise from the Functions I module below with functionsExampleMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

// HELPER FUNCTIONS
var convertMinsToHrs = function (mins) {
  return mins / 60;
};

var calcTrainTwoSpeed = function (delayInMins) {
  // save fixed values to variables
  var trainSpeed = 200;
  var timeToTokyo = 2;
  // calculate distance to tokyo
  // totalDistance = 400km
  // dist = speed * time
  var distanceToTokyo = trainSpeed * timeToTokyo;
  // calculate new time available after substracting delay
  var remainingTimeForTravel = timeToTokyo - convertMinsToHrs(delayInMins);

  // calculate the speed that train 2 needs to travel at, in order to cover the same distance at a reduced travel time
  trainTwoNewSpeed = distanceToTokyo / remainingTimeForTravel;

  // returm the new speed; 'toFixed' limits the ans to a specified decimal place
  return trainTwoNewSpeed.toFixed(2);
};

// MAIN FUNCTION

var trainSpeedMain = function (input) {
  // Attempt the Comfortable: Train Speed exercise from the Functions I module below with trainSpeedMain as the main function.
  var trainTwoNewSpeed = calcTrainTwoSpeed(input);
  var myOutputValue = `Given a ${input} min delay, train 2 needs to travel at a speed of ${trainTwoNewSpeed} km/h in order to arrive at the same time as train 1.`;
  return myOutputValue;
};

// HELPER FUNCTIONS

// MAIN FUNCTION

var clockMain = function (input) {
  // Attempt the More Comfortable: Clock exercise from the Functions I module below with clockMain as the main function.
  // get number of hours and minutes from input
  var minsPerHour = 60;
  var numHours = 1 + input / minsPerHour;
  var numMins = input % minsPerHour;

  // angle of hour hand (from 12)
  var numberOfHours = 12;
  var oneRoundAngle = 360;
  var anglePerHour = oneRoundAngle / numberOfHours;
  var hourAngle = anglePerHour * numHours;

  // angle of minute hand (from 12)
  var minutesPerHour = 60;
  var anglePerMinute = oneRoundAngle / minutesPerHour;
  var minuteAngle = anglePerMinute * numMins;

  var angleHourAndMin = Math.abs(hourAngle - minuteAngle);
  return angleHourAndMin;
};
