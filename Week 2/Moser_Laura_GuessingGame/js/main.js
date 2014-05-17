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

var dom = {
	input: document.querySelector("#input:"),
	output: document.querySelector("#output"),
	button: document.querySelector("button")
};

var randomNumber = Math.floor((Math.random() * 10) + 1);

var validateInput = function() {
	playersGuess = parseInt(dom.input.value);
};






})();