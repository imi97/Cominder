var points = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "title": "El Mussol",
        "description": "A restaurant to eat owls"
      },
      "geometry": {
        "coordinates": [2.1915381401222476, 41.40480971528061],
        "type": "Point"
      }
    },
    {
      "type": "Feature",
      "properties": {
        "title": "Tagliatella",
        "description": "A fancy restaurant to eat good pasta"
      },
      "geometry": {
        "coordinates": [2.192299385042361, 41.404939986348154],
        "type": "Point"
      }
    },
    
  ],
}

var restaurantSales = {
  "El Mussol" : [
    {
      "coordinates": [2.1915381401222476, 41.40480971528061],
      "discount": 20,
      "members" : 4,
    },
  ],
  "Tagliatella": [
    {
      "coordinates": [2.192299385042361, 41.404939986348154],
      "discount": 15,
      "members" : 3 
    },
  ],
}

module.exports = {
  points,
  restaurantSales
}