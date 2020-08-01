// from data.js
var tableData = data;

// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("#ufo-table");

// Select the table
var table = d3.select("tbody")


// Creating the table
tableData.forEach(UFO =>{
  row = table.append("tr")
  Object.entries(UFO).forEach(([key, value])=>{
    row.append("td").text(value)
  })
})


// Create event handlers 
button.on("click", runEnter);
form.on("submit",runEnter);


// Complete the event handler function for the form 
function runEnter() {

  // Prevent the page from refreshing
  d3.event.preventDefault();
  
  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  // Filtering data based on input value
  var filteredData = tableData.filter(UFO => UFO.datetime === inputValue);

  
  // Clearing previous table
  table.html("")

  // Creating filtered table
  filteredData.forEach(UFO =>{
    row = table.append("tr")
    Object.entries(UFO).forEach(([key, value])=>{
      row.append("td").text(value)
    })
  });
};


