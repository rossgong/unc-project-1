var loc = "Raleigh";
var cat = "Music";
var date = "2019010100-2019010200";


var apiKey = "d5BxBLF9bV3zMw6v";

$(document).ready(function () {
	$("#search-btn").on("click", function (event) {
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
	});
})



function createCard(event) {
	var card = $("<div>", { class: "card" });

	//add card section
	var infoSection = $("<div>", { class: "card-section" });
	infoSection.append($("<h4>").text(event.title));
	infoSection.append($("<p>").text(event.venue_name));
	infoSection.append($("<p>").html(event.description));

	var eventDate = moment(event.start_time);

	infoSection.append($("<p>").text(eventDate.format("MMMM DD YYYY, h:mm a")));
	infoSection.append($("<a>", { href: event.url }).text("More Info"))

	card.append(infoSection);

	return $("<div>", { class: "cell" }).append(card);