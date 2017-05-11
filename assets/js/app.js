var map, featureList, boroughSearch = [];

mapboxgl.accessToken = 'pk.eyJ1IjoiYWJveWVyIiwiYSI6ImNpZ3Y1bTN1cTBod2x2cW0zejJyeDRwOWUifQ.pNbGU-s0cDtU_PW9pBsL4w';
var map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/mapbox/streets-v9',
center: [-122.265244, 37.791167], // starting position
zoom: 11.90 // starting zoom
});
map.on('load', function () {
  map.addLayer({
        "id": "elementary",
        "type": "fill",
        'source': {
            'type': 'geojson',
            "data": "/assets/geoJSON/ES_BOUNDS_1617.json"
          },
          'paint': function(feature) {
              switch (feature.properties.Name) {
                  case 'CARL B. MUNCK':
                    return {color: "#ff0000"};
                  default:
                }

          }}, 'water');

      });

/*
      var boroughs = L.geoJson(null, {
        style: function (feature) {
          return {
            color: "black",
            fill: false,
            opacity: 1,
            clickable: false
          };
        },
        onEachFeature: function (feature, layer) {
          boroughSearch.push({
            name: layer.feature.properties.BoroName,
            source: "Boroughs",
            id: L.stamp(layer),
            bounds: layer.getBounds()
          });
        }
      });

 $.getJSON("assets/geoJSON/boroughs.geojson", function(data) {
     boroughs.addData(data);
     map.addLayer(boroughs);
 });
 });*/
