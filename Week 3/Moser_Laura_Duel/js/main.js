/*
Name: Laura Moser
Date: 5/23/14
Assignment: Homework Week 3 - The Duel Part 3. 
*/

//self-executing fuction
(function(){
 
 	console.log("FIGHT!!");
 	
 	//my dom
 	var fighter1_txt = document.querySelector("#evilQueen").querySelector("p"); // Query Selector used so '#' is needed.
 	var fighter2_txt = document.querySelector("#wickedWitch").querySelector("p");
 	var round_txt = document.getElementById("round_number"); 
 	var button = document.getElementById("fight_btn"); //added ID to button in HTML
 	
 	//button - click event
 	button.addEventListener("click", fight, false);
 	
 	//Array of Objects for Fighters.
 	var  fighters = [
 	
 	         {
 	            name: "Evil Queen",
 	            damage:20,
 	            health:100
 	         },
 	         {
 	             name: "Wicked Witch",
 	             damage:20,
 	             health:100
 	         }];
 	
 	//Start Round	
 	var round = 1;
 	
 	//Starts the dom - Using DOM instead of alerts
 	round_txt.innerHTML = "**Click Below to Start Dueling!**";
 	fighter1_txt.innerHTML = fighters[0].name + ":" + fighters[0].health;
 	fighter2_txt.innerHTML = fighters[1].name + ":" + fighters[1].health;
 	
 
 	//Fight Function - The whole program put together.
 	function fight() {
 		
 		console.log("**In the fight function**");
 		
 		fighter1_txt.innerHTML = fighters[0].name + " : " + fighters[0].health; // Shows the Fighters Name and Players Health after each fight!
 		fighter2_txt.innerHTML = fighters[1].name + " : " + fighters[1].health;
 		
 		
 		//Formula to determine damage
 		var formula1 = Math.floor(Math.random() * (fighters[0].damage + fighters[0].damage *.5));
 		var formula2 = Math.floor(Math.random() * (fighters[1].damage + fighters[1].damage *.5));
 		
 		//Damage Inflicted
 		fighters[0].health -= formula1;
 		fighters[1].health -= formula2;
 		
 		console.log(fighters[0].health, fighters[1].health);
 		
 		// Checks for Winner
 		var results = winnerCheck();
 		
 		console.log(results);// Fight Results Print In The Console
 		
 		round_txt.innerHTML = "Round #" + round;
 		round_txt++;
 		if (results === "NO WINNER") //If no winner Displays results of remaining health for each fighter.
 		    {
 		      fighter1_txt.innerHTML = fighters[0].name + " : " + fighters[0].health;
 		      fighter2_txt.innerHTML = fighters[1].name + " : " + fighters[1].health;
 		
 		     } else{
 		                fighter1_txt.innerHTML = results;
 		                fighter2_txt.innerHTML = "";
 		
 		                button.removeEventListener("click", fight, false);
 		
 		                document.querySelector('.buttonblue').innerHTML = 'Game Over!'; //Button changes from "FIGHT" to "DONE!!!"
 		            };
 		 		
 	};
 		
 	
 	function winnerCheck() {
 	
 		console.log("in winnerCheck FN");
 	
 		var result = "NO WINNER";
 	        
 	        if (fighters[0].health < 1 && fighters[1].health < 1)
 	        {
 	            result = "YOU BOTH DIE!!! NO WINNER THIS GAME!!!"; // "YOU BOTH DIE!!! NO WINNER THIS GAME!!!" 
 	
 	        } else if(fighters[0].health < 1){
 	            result = "**GAME OVER** " + fighters[1].name + " WINS!!!" // "**GAME OVER** Wicked Witch Wins        
 	        } else if (fighters[1].health < 1)
 	        
 	        {
 	            result = "**GAME OVER** " + fighters[0].name + " WINS!!!" // "**GAME OVER** Evil Queen Wins
 	        }
 	        
 	        return result;
 		
 	};	
 	
 	
 	
 	/**Program Starts Here**/
 	fight();
 
})();


