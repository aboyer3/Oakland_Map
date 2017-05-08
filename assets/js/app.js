var map, featureList, boroughSearch = [];

mapboxgl.accessToken = 'pk.eyJ1IjoiYWJveWVyIiwiYSI6ImNpZ3Y1bTN1cTBod2x2cW0zejJyeDRwOWUifQ.pNbGU-s0cDtU_PW9pBsL4w';
var map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/mapbox/streets-v9'
});
map.on('load', function () {
  map.addLayer({
        "id": "bourough",
        "type": "fill",
        'source': {
            'type': 'geojson',
            "data": "assets/geoJSON/boroughs.geojson"
          },
          'paint': {
            'fill-color': '#088',
            'fill-opacity': 0.8
          },'water')
      });



/*var boroughs = L.geoJson(null, {
 style: function(feature) {
         color: "black",
         fill: false,
         opacity: 1,
         clickable: false
     };
 },
 onEachFeature: function(feature, layer) {
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
 });*/
