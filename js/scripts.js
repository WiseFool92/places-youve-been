// Backend Logic
function Place(location, landmarks, season, description) {
  this.location = location;
  this.landmarks = landmarks;
  this.season = season;
  this.description = description;
}

Place.prototype.addlandmark = function(landmark){
  this.landmarks.push(landmark);
}

var locationArray = [];
// TEST 
// gather inputs from user
//debugger;
// run prototype method

// Frontend UI
$(document).ready(function() {

  $("#location-form").submit(function(event) {
    var inputLocation = $("#location").val();
    var inputLandmarks = [];
    inputLandmarks.push($("#landmark1").val());
    inputLandmarks.push($("#landmark2").val());
    inputLandmarks.push($("#landmark3").val());
    var inputSeason = $("#season").val();
    var inputDescription = $("#description").val();
    var newPlace = new Place(inputLocation, inputLandmarks, inputSeason, inputDescription);
    locationArray.push(newPlace);

    $("#output").text("");
    for(var i = 0; i < locationArray.length; i++) {
      $("#output").append ("<div id=\"click-link\">");
      $("#output").append ("<h2>" + locationArray[i].location + "</h2>");
      $("#output").append ("<ul class=\"location-info\">");
      $("#output").append("<li>" + locationArray[i].description + "</li>");
      $("#output").append("<li>" + locationArray[i].season + "</li>");
      $("#output").append("<li><strong>Landmarks</strong></li>");
      for(var j = 0; j < locationArray[i].landmarks.length; j++){ // for landmarks array to iterate through
        $("#output").append("<li>" + locationArray[i].landmarks[j] + "</li>");        
      }
      $("#output").append("</ul>");
      $("#output").append("</div>");
    }

    event.preventDefault();
  });

  $("#click-link").click(function() {
    $(this).children("ul").toggleClass("location-info");
  });

// A second method we were testing to perform the same task as above
  $("#location-form").submit(function(event) {
    event.preventDefault();
    var inputLocation = $("#location").val();
    var inputLandmarks = [];
    inputLandmarks.push($("#landmark1").val());
    inputLandmarks.push($("#landmark2").val());
    inputLandmarks.push($("#landmark3").val());
    var inputSeason = $("#season").val();
    var inputDescription = $("#description").val();
    var newPlace = new Place(inputLocation, inputLandmarks, inputSeason, inputDescription);

    $("output").append("<li class = 'outputLocation'><h1>" + newPlace + inputLocation + "</h1>" + newPlace + inputSeason + "" + newPlace + "</li>");
    $("outputLocation").click(function() {
      $(this).find("outputDescription").toggle();
    })
  })
  
})