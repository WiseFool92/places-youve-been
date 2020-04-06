// Backend Logic
function Place(location, landmarks, season, description) {
  this.location = location;
  this.landmarks = landmarks;
  this.season = season;
  this.description = description;
  //this.name = name;
}

Place.prototype.addlandmark = function(landmark){
  this.landmarks.push(landmark);
}

var locationArray = []
// TEST 
// gather inputs from user
var inputLocation = "Seattle";
var inputLandmarks = ["Space Needle", "Pike Place", "Gas Works Park", "Lake Washington"];
var inputSeason = "Summer";
var inputDescription = "Seattle is a seaport city on the West Coast of the United States. It is the seat of King County, Washington.";
var newPlace = new Place(inputLocation, inputLandmarks, inputSeason, inputDescription);
//debugger;
// run prototype method

// Frontend UI
$(document).ready(function() {

  event.preventDefault();
  $("#output").text();
})