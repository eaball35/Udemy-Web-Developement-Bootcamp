// Create secretNumber
var secretNumber = 4;

// Ask user for guess
var stringGuess = prompt("Guess a number!");
var guess = Number(stringGuess);

// Check guess
if (guess === secretNumber) {
  alert ("You got it right!");
}
else if (guess < secretNumber){
  alert ("Guess is too low. Guess again!");
}
else {
  alert ("Guess is too high. Guess again!");
}
