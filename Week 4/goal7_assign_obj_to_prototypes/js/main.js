/**
 * Created by the JavaScript Development Team
 * Class: PWA
 * Goal: Goal7
 * Name: Laura Moser
 */



(function(){

// Global Variables 
var maxPeople = 3;
var people = [];
var names = ["Monica", "Chandler", "Ross", "Rachel", "Joey"];
var interval;


//Loop - That will randomly choose 3 people
for (var i=0; i < maxPeople ; i++){

		//This will randomly choose 3 people
		var personIndex = Math.floor(Math.random() * names.length);
		
		//Keyword NEW to set up person object
		var person = new Person(names[personIndex], i+1);
		
		populateHTML(person.names,"r"+(i+1)+"c1");
		populateHTML(person.job,"r"+(i+1)+"c2");
		
		people.push(person);
		names.splice(personIndex,1);
		
}



//set interval
interval = setInterval(runUpdate, 1000 / 30);


function populateHTML(data, field){
	
	var id = document.getElementById(field);
	id.innerHTML = data;

}


function runUpdate(){
	people.forEach(function(element) {
			//console.log(elements);
			element.update();
	
	});
	
}


})();