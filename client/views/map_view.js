var initialize = function () {
  var mapSection = document.getElementById('map');
  var near-me-button = document.querySelector("#near-me-button");

  var mainMap = new MapWrapper(mapDiv, center, 10);
  mainMap.addMarker(center);

  var findlocation = function () {
    mainMap.geoLocate();
  }

}