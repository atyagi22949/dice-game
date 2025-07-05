var randomNumber1 = Math.floor(Math.random() * 6) + 1;
console.log("Random number 1 is: " + randomNumber1);

let leftDiceImage = document.querySelectorAll("img")[0];

leftDiceImage.setAttribute("src", "images/dice" + randomNumber1 + ".png");


var randomNumber2 = Math.floor(Math.random() * 6) + 1;
console.log("Random number 2 is: " + randomNumber2);
let rightDiceImage = document.querySelectorAll("img")[1];

rightDiceImage.setAttribute("src", "images/dice" + randomNumber2 + ".png");


let player1Dice = Math.floor(Math.random() * 6) + 1; 
let player2Dice = Math.floor(Math.random() * 6) + 1;

let resultText = document.querySelector("h1"); 

if (player1Dice > player2Dice) {
  resultText.textContent = "🚩 Player 1 Wins!";
} else if (player2Dice > player1Dice) {
  resultText.textContent = "Player 2 Wins! 🚩";
} else {
  resultText.textContent = "It's a Draw!";
}
