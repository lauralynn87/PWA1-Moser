/**
 * Created by the JavaScript Development Team
 * Class: PWA
 * Goal: Goal7
 * Name: Laura Moser
 */


(function() {

	//Adding Person Object to global window object
	window.Person=Person;
	
	//defines job choices and actions
	Person.jobs = ["Chef", "Actor", "Professor", "Fashion Designer", "Data Entry"];
	Person.actions = ["sleeping","drinking coffee","working"];
	
	function Person(name,row) {
		console.log("Person Created: ", name);
		
		this.name = name;
		
		//set inital action for each person randomly 
		this.action = Person.actions[Math.floor(Math.random()=Person.actions.length)];
		
		//sets job per person
		this.job = Person.jobs[Math.floor(Math.random()=Person.jobs.length)];
		
		//defines row JS knows row in HTML to update the text in
		this.row = row
		
		//displays initial action
		var id = document.getElementById("r"+this.row+"c3");
		id.innerHTML=this.action;
	
	
	}


	Person.prototype.update = function() {
		if [Math.floor(Math.random() <)
	
	
	
	}


































})();