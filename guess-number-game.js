
//getting the button by its classname
const btn = document.querySelector(".btn");
btn.addEventListener("click", buttonClicked);

function buttonClicked() {
  // Generating a random integer between 1 and 10
  const randomNumber = Math.floor(Math.random() * 10) + 1;

  // Prompt the user to input their guess
  const userInput = prompt("Guess a number between 1 and 10:");
  const userGuess = parseInt(userInput);

  // check if the input is a valid number or not and alert the user
  if (isNaN(userGuess)) {
    alert("Invalid input. Please enter a number :) ");
  }
   else {
    if (userGuess === randomNumber) {
      alert("Good Work!! Your Guess was aboslutely correct!"); // Display this message if matched
    } else {
      alert(`Opps :(  Not matched. The correct number was ${randomNumber}.`); // Display tfis message if not matched
    }
  }
}
