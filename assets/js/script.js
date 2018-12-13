

var loc = "";
var cat = "";
var date = "";


var apiKey = "d5BxBLF9bV3zMw6v";

$(document).ready(function () {
	$("#search-btn").on("click", function (event) {


		var momDate = moment($("#date-input").val(), "MM/DD/YYYY");
		if (!momDate.isValid()) {
			momDate = moment();
		}

		date = momDate.format("YYYYMMDD00") + "-" + momDate.add(1, "d").format("YYYYMMDD00");

		console.log(date);

		loc = $("#location-input").val();
		if (loc == "") {
			loc = "Raleigh";
		}

		cat = $("#cat-input").val();

		console.log(constructURL());

		$.ajax({
			url: constructURL(),
			method: "GET",
			dataType: "jsonp",
		}).then(function (response) {
			console.log(response);
			var container = $("#card-container").empty();
			response.events.event.forEach(event => {
				container.append(createCard(event));
			});
		});

		//prevents default
		return false;
	});
})



function createCard(event) {
	var card = $("<div>", { class: "card" });

	//add card section
	var infoSection = $("<div>", { class: "card-section" });
	infoSection.append($("<h4>").text(event.title));
	infoSection.append($("<p>", { id: "event-venue" }).text(event.venue_name));
	infoSection.append($("<p>", { id: "event-description" }).html(event.description));

	var eventDate = moment(event.start_time);

	infoSection.append($("<p>", { id: "event-date" }).text(eventDate.format("MMMM DD YYYY, h:mm a")));
	infoSection.append($("<a>", { href: event.url }).text("More Info"))

	var mapDiv = $("<div>", { class: "map card-section" });

	var map = new google.maps.Map(mapDiv[0], {
		center: { lat: parseFloat(event.latitude), lng: parseFloat(event.longitude) },
		zoom: 15
	});

	new google.maps.Marker({ position: { lat: parseFloat(event.latitude), lng: parseFloat(event.longitude) }, map: map });

	card.append(infoSection);

	card.append(mapDiv);

	return $("<div>", { class: "cell" }).append(card);
}

function constructURL() {
	return "http://api.eventful.com/json/events/search?app_key=" + apiKey + "&location=" + loc + "&date=" + date + "&category=" + cat;
}