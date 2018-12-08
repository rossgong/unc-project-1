

var loc = "Raleigh";
var cat = "Music";
var date = "Today";


var apiKey = "d5BxBLF9bV3zMw6v";

$.ajax({
	url: constructURL(),
	method: "GET",
	dataType: "jsonp",
}).then(function (response) {
	console.log(response);
});

function constructURL() {
	return "http://api.eventful.com/json/events/search?app_key=" + apiKey + "&location=" + loc + "&=date" + date + "&category=Music";
}