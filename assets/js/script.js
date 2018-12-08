

var loc = "Raleigh";
var cat = "music";
var date = "Today";

var apiKey = "d5BxBLF9bV3zMw6v";

$("button").on("click", function (event) {
	//set all the variable above from the relevent html elemetns(loc, cat, date)

	//make the ajax call
	$.ajax({
		url: constructURL(),
		method: "GET",
		dataType: "jsonp",
	}).then(function (response) {
		console.log(response);

		//clear the html in the cards div

		//iterate through all the events in the events with a for loop

		//get the title of the event, the date of the event, description and any relevent details

		//create a new card with the correct classes and subdivs exactly like the ones in the html

		//add the variables you got earlier to the card

		//append the card to the cards container




	});
});



function constructURL() {
	return "http://api.eventful.com/json/events/search?app_key=" + apiKey + "&location=" + loc + "&=date" + date + "&category=" + cat;
}