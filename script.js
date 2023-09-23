const playerGuess = document.getElementById("guess");
const checkButton = document.getElementById("checkGuess");
const message = document.getElementById("message");
const guessTracker = document.getElementById("trackGuess");
const restartButton = document.getElementById("restart"); // Use restartButton here

let numberOfGuesses = 0;
let randomNumber = generateNumber();

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
    numberOfGuesses++;
    message.textContent = `Congratulations! You guessed the correct number in ${numberOfGuesses} guesses`;
    disableInput();
    restartButton.style.display = "block"; // Display the Restart button
  } else if (guess > randomNumber) {
    numberOfGuesses++;
    message.textContent = "Too high, try again.";
  } else {
    numberOfGuesses++;
    message.textContent = "Too low, try again.";
  }
  guessTracker.textContent = `Number of guesses: ${numberOfGuesses}`;
}

// Function to disable input and check button
function disableInput() {
  playerGuess.disabled = true;
  checkButton.disabled = true;
}

// Function to reset the game
function restartGame() {
  numberOfGuesses = 0;
  randomNumber = generateNumber(); // Regenerate the random number
  playerGuess.value = "";
  message.textContent = "";
  guessTracker.textContent = "Number of guesses: 0";
  playerGuess.disabled = false;
  checkButton.disabled = false;
  //restartButton.style.display = "none"; // Hide the Restart button
}

checkButton.addEventListener("click", checkGuess);
restartButton.addEventListener("click", restartGame);
