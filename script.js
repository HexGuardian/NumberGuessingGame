const playerGuess = document.getElementById("guess");
const checkButton = document.getElementById("checkGuess");
const message = document.getElementById("message");

// Generate the random number when the game starts
const randomNumber = generateNumber();

// Callback function to generate a random number
function generateNumber() {
  return Math.floor(Math.random() * 100) + 1;
}

// Callback function to check player's guess
function checkGuess() {
  const guess = parseInt(playerGuess.value);

  if (isNaN(guess) || guess < 1 || guess > 100) {
    message.textContent = "Please enter a valid number between 1 and 100.";
  } else if (guess === randomNumber) {
    message.textContent = "Congratulations! You guessed the correct number!";
  } else if (guess > randomNumber) {
    message.textContent = "Too high, try again.";
  } else {
    message.textContent = "Too low, try again.";
  }
}

checkButton.addEventListener("click", checkGuess);
