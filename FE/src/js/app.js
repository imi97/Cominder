var userType = ''; // Will be type restaurant or client
var username = ''; // Name
var geojson = []; // Points in the map
var popup;
var map;

$('.loginForm').submit(function(e) {
  sendLogin();
  return false;
});

$('.registerForm').submit(function(e) {
  sendRegistration();
  return false;
});

function goHome() {
  connection === null ? showLanding() : openApp(); 
}

function showLanding() {
  $('.landing').show();

  $('.sign-up').hide();
  $('.main').hide();
  $('.sign-in').hide();
}

function openRegistration() {
  $('.sign-up').show();

  $('.main').hide();
  $('.sign-in').hide();
  $('.landing').hide();
}

function openLogin() {
  $('.sign-in').show();

  $('.main').hide();
  $('.sign-up').hide();
  $('.landing').hide();
}

function openApp() {
  $('.main').show();
  $('.map').load('./map.html');

  $('.sign-in').hide();
  $('.sign-up').hide();
  $('.landing').hide();
}

function sendRegistration() {
  connect();
}

function sendLogin() {
  connect();
}