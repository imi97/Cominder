var connection = null;

function connect() {
  connection = new WebSocket('ws://127.0.0.1:9035');

  connection.onopen = () => {
    console.log('Connection is open and ready to use');
  };

  connection.onmessage = (msg) => {
    var obj = JSON.parse(msg.data);
    console.log(msg.data)

    switch (obj.type) {
      case 'LoginOK':
        console.log('LoginStatus: Success', obj );
        getMapPoints();
        openApp();
        break;

      // TODO
      case 'LoginWRONG':
        alert('Wrong password' );

      default:
        break;
    }
  };
}

var xhr = new XMLHttpRequest();
const apiPort = 9034;
const apiURL = 'http://127.0.0.1';

function getMapPoints() {
  xhr.open('GET', `${apiURL}:${apiPort}/points`, true);
  xhr.send();
  xhr.onreadystatechange = processRequest;
}

function processRequest(e) {
  if (xhr.readyState == 4 && xhr.status == 200) {
    geojson = JSON.parse(xhr.responseText);
  }
}