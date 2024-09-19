/* LenKendall following lesson */
//initialize function called when script loads
function initialize(){
    cities();
};

//function to create a table with cities and their populations
function cities(){
    
	//define two arrays for cities and population
	var cityPop = [
	{ 
		city: 'Madison',
		population: 233209
	},
	{
		city: 'Milwaukee',
		population: 594833
	},
	{
		city: 'Green Bay',
		population: 104057
	},
	{
		city: 'Superior',
		population: 27244
	}];

	//create a table element
	var table = document.createElement("table");

 	//create a header row
 	var headerRow = document.createElement("tr");

 	//add the "City" and "Population" columns to the header row
 	headerRow.insertAdjacentHTML('beforeend','<th>City</th><th>Population</th>')

 	//add the row to the table
 	table.appendChild(headerRow);
	
 	//loop to add a new row for each city
 	for(var i = 0; i < cityPop.length; i++){
		 //create a new row
		 var row = document.createElement("tr");

		 //add city and population data to the row
		 row.insertAdjacentHTML('beforeend', '<td>' + cityPop[i].city + '</td>' + '<td>' + cityPop[i].population + '</td>'
		 );

		 //add the row to the table
		 table.appendChild(row);
	}
	//add the table to the div
	document.querySelector('#mydiv').appendChild(table);

	//call functions to add columns and events
	addColumns(cityPop);
	addEvents();

}

// function to add a new column for city size
function addColumns(cityPop) {
    
    document.querySelectorAll("tr").forEach(function(row, i) {

    	if (i == 0) {
		
    		row.insertAdjacentHTML('beforeend', '<th>CitySize</th>');
    	} else {

    		var citySize;

    		if (cityPop[i-1].population < 100000){
    			citySize = 'Small';

    		} else if (cityPop[i-1].population < 500000){
    			citySize = 'Medium';

    		} else {
    			citySize = 'Large';
    		};
			/* corrected spelling of adjacent */
			row.insertAdjacentHTML('beforeend', '<td>' + citySize + '</td>');
			
		}

	});

}

//Function to add event listeners

function addEvents() {
	//Mouseover event to change text color
	document.querySelector("table").addEventListener("mouseover", function() {

		var color = "rgb(";

		for (var i = 0; i < 3; i++) {
	
			var random = Math.round(Math.random() * 255);
			
			color += random;
		
			if (i < 2) {
				color += ",";
		
			} else {
				color += ")";
			}
	
		}
		document.querySelector("table").style.color = color;
	});

	//click event to display an alert
	function clickme() {
		alert('Hey, you clicked me!'); 
	}
	
	document.querySelector("table").addEventListener("click", clickme);
}

//Load the script when DOM is fully loaded
document.addEventListener('DOMContentLoaded', initialize);

//Fetch requests
function jsAjax() {
    //basic fetch
    fetch('data/MegaCities.geojson')
        .then(function(response) {
            return response.json();
        })
        .then(callback) //send retreived data to a callback function

};

//define callback function
function callback(response) {

    var myData = response;
    //pass data to another function
    nextFunction(myData);

}

function nextFunction(data){
    console.log(data); //contains response data held by myData in callback

};

window.onload = jsAjax(); 
	
