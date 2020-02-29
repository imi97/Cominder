var xhr;
const apiPort = 9034;
const apiURL = 'http://127.0.0.1';

function getMapPoints() {
  xhr = new XMLHttpRequest();
  xhr.open('GET', `${apiURL}:${apiPort}/points`, true);
  xhr.send();
  xhr.onreadystatechange = processRequest;
}

function postRestaurant(geoPoint) {
  xhr = new XMLHttpRequest();
  xhr.open('POST', `${apiURL}:${apiPort}/point`, true);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send(JSON.stringify(geoPoint));
  xhr.onreadystatechange = processRequest;
}

function processRequest() {
  if (xhr.readyState == 4 && xhr.status == 200) {
    geojson = JSON.parse(xhr.responseText);
  }
}

addGroupFromMap = (lng, lst) => {
  var groupName = $('#addGroupInput').val();
  var descriptionGroup = $('#descriptionGroup').val();
  var geoPoint = {
    type: "Feature",
    properties: {
      title: groupName,
      description: descriptionGroup
    },
    geometry: {
      coordinates: [
        lng,
        lst
      ],
      type: "Point"
    }
  }
  postRestaurant(geoPoint); // TODO: Change to Postgroup
}
