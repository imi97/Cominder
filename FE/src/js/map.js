mapboxgl.accessToken = 'pk.eyJ1IjoieGF2aXNhbnRhIiwiYSI6ImNrNzIwejBjaDA0aTIzZm53OG1jM3o5MXoifQ._rJdKgn_Nx_wsi7blKBlCQ'; // replace this with your access token
var numFeatures;

var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/dark-v10', // replace this with your style URL
  center: [2.191607919009357, 41.40499328136784],
  zoom: 13.7
});

map.on('load', function(e) {
  numFeatures = geojson.features.length;

  map.addSource('restaurants-source', {
    'type': 'geojson',
    'data': geojson
  });
    
  window.setInterval(function() {
    if(numFeatures !== geojson.features.length) {
      map.getSource('restaurants-source').setData(geojson);
      numFeatures = geojson.features.length;
    }
  }, 2000);

  map.addLayer({
    'id': 'restaurants-layer',
    'type': 'symbol',
    'source': 'restaurants-source',
    'layout': {
      'icon-image': 'restaurant-15',
      'icon-size': 1.5
    }      
  });
});

map.on('click', function(e) {
  const lng = e.lngLat.lng;
  const lat = e.lngLat.lat;
  var features = map.queryRenderedFeatures(e.point, {
    layers: ['restaurants-layer']
  });

  if (!features.length) {
    popup = new mapboxgl.Popup({ offset: [0, -15] }) // TODO: Close it when submit button
      .setLngLat(e.lngLat)
      .setHTML(
        '<h3>' + "Add group:" + '</h3>' + 
        '<input id="addGroupInput" placeholder="name">'+ 
        '<input id="descriptionGroup" placeholder="description">'+ 
        `<button onClick="addGroupFromMap(${lng},${lat})">Add</button>`)
      .addTo(map);
    return;
  }

  var feature = features[0];

  popup = new mapboxgl.Popup({ offset: [0, -15] })
    .setLngLat(feature.geometry.coordinates)
    .setHTML('<h3>' + feature.properties.title + '</h3><p>' + feature.properties.description + '</p>')
    .addTo(map);
});
