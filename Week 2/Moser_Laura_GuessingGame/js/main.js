/**
 * GUESSING GAME:
 *
 * Created By: Laura Moser
 * Date: 5/16/14
 * 
 * GUESSING GAME
 */


(function () {

//Game variables - These are Global.
var playersGuess = 0;
var guessesRemaining = 3;
var guessesMade = 0;

//DOM Elements Setup in my index.html page
var dom = {
	input: document.querySelector("#input"),
	output: document.querySelector("#output"),
	button: document.querySelector("button")
};

//Random Number Generator
var randomNumber = Math.floor((Math.random() * 10) + 1);
console.log("Random Number: "+randomNumber)


//Validate's User Input
var validateInput = function() {
	playersGuess = parseInt(dom.input.value);
	
	if(isNaN(playersGuess)){
		dom.output.innerHTML = "Please enter a number between 1 and 10";
		
	}else if (playerGuess < 1 || playersGuess > 10) {
		dom.out.innerHTML = "Please make sure your guess is between numbers 1 and 10";
	
	}else {
		guessNumber();
	};

	
};


//Guessing Game
var guessNumber = function() {
	guessRemain--;
	guessMade++;
	gameState = "Guess: " + guessMade + " Remaining " + guessRemain;
	
	//matches player's guess to random number
	playersGuess = parseInt(input.value);
	
	if(playersGuess > randomNumber){
		dom.output.innerHTML = "That's to high, try again." + gameState;
		
	}else if(playersGuess < randomNumber){
		dom.output.innerHTML = "That's to low, try again." + gameState;

	}else if (playersGuess === randomNumber) {
		gameOver(true);
	}
};

console.log("Players Guess: " + playersGuess);

//Winner's Circle - Is the Game Over? Who Won? 
var gameOver = function(win) {
	
	if (win){
		dom.output.innerHTML
		= "Congratulations! You guessed the right number!" + "</br>"
		+ "You got it in " + guessMade + " guesses.";
	}else{
		dom.output.innerHTML
		= "Sorry, there are no more guesses left. The number was " + randomNumber;
		};
		
		dom.button.removeEventListener("click",clickFn, false);
};

//Allows user to use the 'Enter' key instead of click on the button.
var onKeyDown = function(e) {
	if(e.keycode === 13){
	validateInput();
	};

};

//allows the button to work
var clickFn = function (e) {
	validateInput();
	console.log(guessRemain);
};

dom.button.addEventListener("Click", clickFn, false);

window.addEventListener("keydown", onKeyDown, false)



})();