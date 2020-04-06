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

    $("#output").empty();
    
    for(var i = 0; i < locationArray.length; i++) {
      var result = `
      <div id="click-link${i}">
        <h2>${locationArray[i].location}</h2>
        <ul id="unorderedList${i}" class="location-info">
          <li>${locationArray[i].description}</li>
          <li>${locationArray[i].season}</li>
          <li><strong>Landmarks</strong></li>
        </ul>
      </div>
      `;
      $("#output").append(result);
      for(var j = 0; j < locationArray[i].landmarks.length; j++) {
        $(`#unorderedList${i}`).append(`<li>${locationArray[i].landmarks[j]}</li>`);
      }
      $(`#click-link${i}`).click(function() {
        $(this).children("ul").toggleClass("location-info");
      });
    }
    event.preventDefault();
  });
});