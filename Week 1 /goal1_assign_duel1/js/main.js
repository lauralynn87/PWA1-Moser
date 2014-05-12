/*
Name: Laura Moser
Date: 5/11/14
Assignment: Goal1: Duel - The Wicked Witch vs. The Evil Queen (from Once Upon a Time.
*/

//self-executing fuction
(function(){
 
 	console.log("FIGHT!!");
 	
 	//player names
 	var playerOneName = "Evil Queen";
 	var playerTwoName = "Wicked Witch";
 	
 	//player damage
 	var player1Damage = 20;
 	var player2Damage = 20;
 	
 	//player health
 	var playerOneHealth = 100;
 	var playerTwoHealth = 100;
 	
 	//fighting rounds
 	var round = 1;
 
 	function fight() {
 		console.log("in the fight function");
 		
 		alert(playerOneName+":"+playerOneHealth+" *START* "+playerTwoName+":"+playerTwoHealth);
 		
 		for (var i = 0; i < 10; i++) {
 			
 		};
 		
 	};
 	
 	function winnerCheck() {
 	
 	};
 	
 	/**Program Starts Here**/
 	console.log("program starts here");
 	fight();
 
})();


