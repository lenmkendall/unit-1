/* Stylesheet by Len M Kendall, 2024*/
//Example 2.7 line 1
function jsAjax(){
    //use Fetch to retrieve data
    fetch('data/MegaCities.geojson')
        .then(function(response){
            return response.json();
        }) 
        .then(callback) 
};

//define callback function
function callback(response){
    //tasks using the data go here
    console.log(response)
}

window.onload = jsAjax();






document.querySelector("#mydiv").insertAdjacentHTML('beforeend', 'Hello World!');

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
    }]

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
        //assign longer html strings to a variable
        var rowHtml = '<tr><td>' + cityPop[i].city + '</td><td>' + cityPop[i].population + '</td></tr>';
        //add the row's html string to the table
        table.insertAdjacentHTML('beforeend', rowHtml);
    }
    
    document.querySelector('#mydiv').appendChild(table);

}

document.addEventListener('DOMContentLoaded', initialize)



    //document.querySelector("#mydiv").appendChild(table);
    //add the table to the div in index.html
    //var myDiv = document.querySelector("#mydiv");
    //myDiv.appendChild(table)

//call the initialize function when the window has loaded
//window.onload = initialize();
    
