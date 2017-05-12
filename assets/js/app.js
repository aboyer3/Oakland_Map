var map, featureList, boroughSearch = [];

mapboxgl.accessToken = 'pk.eyJ1IjoiYWJveWVyIiwiYSI6ImNpZ3Y1bTN1cTBod2x2cW0zejJyeDRwOWUifQ.pNbGU-s0cDtU_PW9pBsL4w';
var map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/mapbox/streets-v9',
center: [-122.265244, 37.791167], // starting position
zoom: 11.90 // starting zoom
});
map.on('load', function () {
  map.addLayer(
    {
        "id": "blue-bnds",
        "type": "fill",
        'source': {
            'type': 'geojson',
            "data": "assets/geoJSON/blue_bnds.json"
          },
          'paint': {
            'fill-color': '#28ABE5',
            'fill-opacity': 0.5



          }}, 'water');

  map.addLayer(
  {
    "id": "orange-bnds",
    "type": "fill",
    'source': {
        'type': 'geojson',
        "data": "assets/geoJSON/orange_bnds.json"
      },
      'paint': {
        'fill-color': '#E8B61C',
        'fill-opacity': 0.5

      }}, 'water');

      map.addLayer(
      {
        "id": "green-bnds",
        "type": "fill",
        'source': {
            'type': 'geojson',
            "data": "assets/geoJSON/green_bnds.json"
          },
          'paint': {
            'fill-color': '#1DDB99',
            'fill-opacity': 0.5

          }}, 'water');

          map.addLayer(
          {
            "id": "purp-bnds",
            "type": "fill",
            'source': {
                'type': 'geojson',
                "data": "assets/geoJSON/purp_bnds.json"
              },
              'paint': {
                'fill-color': '#F5EBC8',
                'fill-opacity': 0.5

              }}, 'water');

              map.addLayer(
              {
                "id": "red-bnds",
                "type": "fill",
                'source': {
                    'type': 'geojson',
                    "data": "assets/geoJSON/red_bnds.json"
                  },
                  'paint': {
                    'fill-color': '#DD3142',
                    'fill-opacity': 0.5

                  }}, 'water');

                  map.addLayer(
                  {
                    "id": "yellow-bnds",
                    "type": "fill",
                    'source': {
                        'type': 'geojson',
                        "data": "assets/geoJSON/yellow_bnds.json"
                      },
                      'paint': {
                        'fill-color': '#C4D6CB',
                        'fill-opacity': 0.5

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
