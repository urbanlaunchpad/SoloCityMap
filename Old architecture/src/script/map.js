//***********************************************************************
//***********************Here goes the stuff for the map*****************
//***********************************************************************
var kelurahansFusionTableID = "1jdxsdPlAvCNRair4uv2pOwWTzMNtutDdhfXlp9QO";
var musrenbangFusionTableID = "1yHXZ3Z5yQXl8eEewPUgYSzOvd458RhW9pQ2smFIf";
var projectFields = ["KELURAHAN", "YEAR", "VOTED", "CATEGORY", "SUBCATEGORY", "UNIQUE_NUMBER", "LEVEL", "PRIORITY", "PROJECT_NAME", "LOCATION", "AGENCY", "PLANNED_BUDGET", "EXECUTED_BUDGET", "IS_IT_EXECUTED", "NOTES"];
//var colors = ['#FF0000', '#00FF00', '#0000FF', '#FFFF00']; // Kiddie pallette
//var colors = ['#FE0055', '#0E7AFC', '#FF9C00', '#7CFE00']; // Chosen for now
//var colors = ['#04AF44', '#5012A3', '#F1DC06', '#F12F06'];
//var colors = ['#C40093', '#FF7100', '#00A7A1', '#B8F400'];
var colors = ['#BEC1C4', '#AB8A71', '#F0BC6E', '#F7DE8C']; // More neutral, similar to Kota Kita site

//var colors = ['#594C5C', '#ED5A97', '#F2B06A', '#B0EBE0']; // Second neutral attempt
var originalKelurahanOpacity = 0.7;
var onHoverKelurahanOpacity = 0.3;
var activeKelurahanOpacity = 0.1;
var map;
var kelurahans = [];
var projectsArray = [];
google.maps.event.addDomListener(window, 'load', initialize);
var mapStateController = new mapStateController();
function initialize() {
  var stamen_layer = "terrain"; // Kind of Stamen map to be rendered
  var myOptions = {
    zoom: 13,
    center: new google.maps.LatLng(-7.555974952021982, 110.818951686123),
    // mapTypeId: stamen_layer,
    disableDefaultUI: true,
    scaleControl: true /*, 
    mapTypeControlOptions: {
      mapTypeIds: [stamen_layer]
    }*/
  };
  map = new google.maps.Map(document.getElementById('map-canvas'), myOptions);
  getKelurahans();
  getProjects();
}

function getKelurahans(){
  var query = 'SELECT KELURAHAN, geometry, geometry_pos FROM ' + kelurahansFusionTableID;
  getFusionTablesData(query, "parseKelurahans");
}

function mapStateController(){
  var state;
  var possibleStates = {
      Main: 1,
      Kelurahan: 2,
  };
  this.showMain = function(){

  }

  this.onKelurahanMouseOver = function(kelurahanIndex){
      kelurahans[kelurahanIndex].setOpacity(onHoverKelurahanOpacity);
      document.getElementById("kelurahan_name").innerHTML = kelurahans[kelurahanIndex].name;
  }
  this.onKelurahanClick = function(kelurahanIndex){
      map.panTo(kelurahans[kelurahanIndex].center);
      map.fitBounds(kelurahans[kelurahanIndex].bounds);
      kelurahans[kelurahanIndex].setOpacity(activeKelurahanOpacity);
  }
  this.onKelurahanMouseOut = function(kelurahanIndex){
    kelurahans[kelurahanIndex].setOpacity(originalKelurahanOpacity);
    document.getElementById("kelurahan_name").innerHTML = "";
  }
  this.onKelurahan
  this.showKelurahanProjects = function(kelurahanIndex){

    // Zoom to the current kelurahan

    // Get the info on the Projects for this Kelurahan if it doesn't exist

    // Get the info for the RTs in this kelurahan if it doesn't exist

    // Get the info for the RWs in this kelurahans if it doesn't exist

    // Set the other kelurahans as not active

    // Set this kelurahan as active

    // Turn off all the other kelurahans

    // Make this kelurahan dimmer

    // Show the list of projects

  }
}

function parseKelurahans(data){
  var rows = data['rows'];
  for (var i in rows) {
    var newCoordinates = [];
    var kelurahan_name = rows[i][0];
    var center = constructNewPointCoordinates(rows[i][2]['geometry']);
    var geometries = rows[i][1]['geometries'];
    if (geometries) {
      for (var j in geometries) {
        newCoordinates.push(constructNewCoordinates(geometries[j]));
      }
    } else {
      newCoordinates = constructNewCoordinates(rows[i][1]['geometry']);
    }
    kelurahans[i] = new kelurahan(kelurahan_name, newCoordinates, center, i);
  }
  drawKelurahans(kelurahans);
}

function kelurahan(name, geometry, center, index) {
  this.name = name;
  this.geometry = geometry;
  this.index = index;
  this.center = center;
  var projects = null;
  var randomnumber = Math.floor(Math.random() * 4);
  var kelurahanShape = new google.maps.Polygon({
      paths: this.geometry,
      strokeColor: "#000000",
      strokeOpacity: 0.7,
      strokeWeight: 1,
      fillColor: colors[randomnumber],
      fillOpacity: originalKelurahanOpacity,
      kelurahan_name : this.name,
      index : this.index
  });
  this.bounds = kelurahanShape.getBounds();
  this.drawKelurahan = function() {
    kelurahanShape.setMap(map);
  }
  this.initializeShape = function(){
    this.drawKelurahan();
    this.addListeners();
  }
  this.setOpacity = function(opacity) {
    kelurahanShape.setOptions({fillOpacity: opacity});
  }
  this.addListeners = function() {
    google.maps.event.addListener(kelurahanShape, 'mouseover', function() {
      mapStateController.onKelurahanMouseOver(this["index"]);
    });
    google.maps.event.addListener(kelurahanShape, 'mouseout', function() {
      mapStateController.onKelurahanMouseOut(this["index"]);
    });
    google.maps.event.addListener(kelurahanShape, 'click', function() {
      mapStateController.onKelurahanClick(this["index"]);
    }); 
  }
}

function drawKelurahans(kelurahans) {
  this.kelurahans = kelurahans;
  shuffleArray = [];
  for (var i=0; i < kelurahans.length; i++){
    shuffleArray[i] = i;
  }
  shuffleArray = shuffle(shuffleArray);
  i = 0;
  var interval = setInterval(function(){
    if (i < kelurahans.length){
      kelurahans[shuffleArray[i]].initializeShape();
      i++;
    } else{
      clearInterval(interval);
    }
  }, 50)
}

function drawMap(data) {

}

function constructNewCoordinates(polygon) {
  var newCoordinates = [];
  var coordinates = polygon['coordinates'][0];
  for (var i in coordinates) {
    newCoordinates.push(new google.maps.LatLng(coordinates[i][1], coordinates[i][0]));
  }
  return newCoordinates;
}

function constructNewPointCoordinates(originalPoint) {
  var pointCoordinates;
  var pointFromSource = originalPoint["coordinates"];
  pointCoordinates = new google.maps.LatLng(pointFromSource[1], pointFromSource[0]);
  return pointCoordinates;
}

// Fisher–Yates shuffle
function shuffle(array) {
  var counter = array.length, temp, index;
  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    index = Math.floor(Math.random() * counter);
    // Decrease counter by 1
    counter--;
    // And swap the last element with it
    temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }
  return array;
}

google.maps.Polygon.prototype.getBounds = function() {
    var bounds = new google.maps.LatLngBounds();
    var paths = this.getPaths();
    var path;       
    for (var i = 0; i < paths.getLength(); i++) {
        path = paths.getAt(i);
        for (var ii = 0; ii < path.getLength(); ii++) {
            bounds.extend(path.getAt(ii));
        }
    }
    return bounds;
}
//***********************************************************************
//***************Here goes the stuff for the swipe and info**************
//***********************************************************************
function getProjects() {
  columnNames = getWhatToGet(projectFields);
  var query = 'SELECT ' + columnNames + ' FROM ' + musrenbangFusionTableID;
  getFusionTablesData(query, "parseProjects");
}
function parseProjects(data){
  var rows = data['rows'];
  // Creating an array with all the steps storead as objects with the information in them storead with the column names as field names.
  projectsArray = [];
  for (var j in rows){
    projectsArray[j] = {};
    projectsArray[j]["INDEX"] = j
    for (var i=0; i < projectFields.length; i++){
      projectsArray[j][projectFields[i]] = rows[j][i];
    }
  }
  fillProjectCards(projectsArray);
}
function projectCard(project){
  var div = document.createElement("div");
  var category = document.createTextNode(project.CATEGORY);
  var subcategory = document.createTextNode(project.SUBCATEGORY);
  var name = document.createTextNode(project.PROJECT_NAME);
  div.appendChild(category);
  div.appendChild(subcategory);
  div.appendChild(name);
  this.getView = function(){
    return div;
  };
}
function fillProjectCards(projectsArray){
  var swiperWrapper = document.getElementById("swiper-wrapper");
  var projectCardArray = [];
  for (var i=0; i < projectsArray.length; i++){
    var swiperSlide = document.createElement('div');
    swiperSlide.className = 'swiper-slide';
    projectCardArray[i] = new projectCard(projectsArray[i]);
    swiperSlide.appendChild(projectCardArray[i].getView());
    swiperWrapper.appendChild(swiperSlide);
  }
  createSwiperInterface();
}
function createSwiperInterface(){
  var mySwiper = new Swiper('.swiper-container',{
    //Your options here:
    mode:'vertical',
    pagination: '.pagination',
    paginationClickable: true,
    loop: true,
    grabCursor: true,
    createPagination: true,
    autoResize: true,
    resizeReInit: true,
    slidesPerView: 10,
    //etc..
  });
}
//***********************************************************************
//*************Here goes the stuff related to Fusion Tables**************
//***********************************************************************
function getFusionTablesData(query, callback){
  var script = document.createElement('script');
  var url = ['https://www.googleapis.com/fusiontables/v1/query?'];
  url.push('sql=');
  var encodedQuery = encodeURIComponent(query);
  url.push(encodedQuery);
  url.push('&callback=' + callback);
  url.push('&key=AIzaSyAhX7a_0uyiA8DfW-4XJ6ZN_ay8GkAGrz0');
  script.src = url.join('');
  var body = document.getElementsByTagName('body')[0];
  body.appendChild(script);
} 
function getWhatToGet(columnNames){
  var whatToGet = "";
  for (var i = 0; i < columnNames.length; i++){
    whatToGet = whatToGet + columnNames[i] + ", ";
  }
  whatToGet = whatToGet.substring(0, whatToGet.length - 2);
  return whatToGet;
}  