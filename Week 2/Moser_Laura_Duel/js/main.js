/*
Name: Laura Moser
Date: 5/16/14
Assignment: Homework Week 2 - Combining Variables and turning them into arrays.
*/

//self-executing fuction
(function(){
 
 	console.log("FIGHT!!");
 	
 	//player names
 	var playerOne = ["Evil Queen",20,100];
 	var playerTwo = ["Wicked Witch",20,100];
 	
 	//player damage
 	//var player1Damage = 20;
 	//var player2Damage = 20;
 	
 	//player health
 	//var playerOneHealth = 100;
 	//var playerTwoHealth = 100;
 	
 	//fighting rounds
 	var round = 1;
 
 	function fight() {
 		console.log("in the fight function");
 		
 		alert(playerOne[0]+":"+playerOne[2]+" *START* "+playerTwo[0]+":"+playerTwo[2]);
 		
 		//a loop is created to create 'fight' rounds where random damage is taken until a winner is decleared. 
 		for (var i = 0; i < 10; i++) {
 			
 			/*Math Formula for Random Damage*/
 			var minDamage1 = playerOne[1] *.5;
 			var minDamage2 = playerTwo[1] *.5;
 			var f1 = Math.floor(Math.random()*(playerOne[1] - minDamage1)+minDamage1);
 			var f2 = Math.floor(Math.random()*(playerTwo[1] - minDamage2)+minDamage2);
 			
 			/*inflict damage*/
 			playerOne[2]-=f1;
 			playerTwo[2]-=f2;
 			
 			console.log(playerOneName+":"+playerOneHealth+" "+playerTwoName+":"+playerTwoHealth);
 			
 			var results = winnerCheck();
 			console.log(results);
 		
 		
 			if(results === "no winner"){	// Continues to the next round
 				
 				round++;
 				alert(playerOne[0]+":"+playerOne[2]+" *ROUND " + round + " OVER* "+playerTwo[0]+":"+playerTwo[2]);	// Displays player names, health, and round
 		
 				}else{
 				
 					alert(results);	// Displays the winner
 					break	// ends the fight loop
 					
 					};
 		
 				};
 		
 			};
 		
 	
 	function winnerCheck() {
 	
 		console.log("in winnerCheck FN");
 		var result="no winner";
 		
 		if(playerOne[2]<1&&playerTwo[2]<1){
 			result = "You Both Die"; // if both players get below 0
 			
 		} else if (playerOne[2]<1) {
 			result = playerTwo[0]+" Wins!!!"; // When Player One health goes below 0, then player two wins!
 			
 		} else if (playerTwo[2]<1) {
 			result = playerOne[0] + " Wins!!"; // When player 2 health goes below 0, player one wins!
 		
 		};
 		
 		return result; //returns the results
 		
 	};	
 	
 	
 	
 	/**Program Starts Here**/
 	console.log("program starts here");
 	fight();
 
})();


