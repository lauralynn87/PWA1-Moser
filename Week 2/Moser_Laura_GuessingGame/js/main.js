/**
 * GUESSING GAME:
 *
 * Created By: Laura Moser
 * Date: 5/16/14
 * 
 * GUESSING GAME
 */


(function ()

//Game variables
var playersGuess = 0;
var guessesRemaining = 3;
var guessesMade = 0;

//DOM Variables
var dom = {
	input: document.querySelector("#input:"),
	output: document.querySelector("#output"),
	button: document.querySelector("button")
};

//Random Number Generator
var randomNumber = Math.floor((Math.random() * 10) + 1);
console.log("Random Number: "+randomNumber)


//Validate's User Input
var validateInput = function() {
	playersGuess = parseInt(dom.input.value);
	
	if(isNaN(playerGuess)){
		dom.output.innerHTML = "Please enter a number between 1 and 10";
		
	else if (playerGuess < 1 || playerGuess > 10) {
		dom.out.innerHTML = "Please make sure your guess is between numbers 1 and 10";
		
	else {
		playGame();
	};

	
};

dom.button.




})();