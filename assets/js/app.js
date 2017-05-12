var map, featureList, boroughSearch = [];

mapboxgl.accessToken = 'pk.eyJ1IjoiYWJveWVyIiwiYSI6ImNpZ3Y1bTN1cTBod2x2cW0zejJyeDRwOWUifQ.pNbGU-s0cDtU_PW9pBsL4w';
var map = new mapboxgl.Map({
container: 'map',
style: '\mapbox://styles/mapbox/light-v9',
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
            'fill-color': '#0BCBF5',
            'fill-opacity': 0.5



          }},'streets');

  map.addLayer(
  {
    "id": "orange-bnds",
    "type": "fill",
    'source': {
        'type': 'geojson',
        "data": "assets/geoJSON/orange_bnds.json"
      },
      'paint': {
        'fill-color': '#34414F',
        'fill-opacity': 0.5

      }});

      map.addLayer(
      {
        "id": "green-bnds",
        "type": "fill",
        'source': {
            'type': 'geojson',
            "data": "assets/geoJSON/green_bnds.json"
          },
          'paint': {
            'fill-color': '#C0EF74',
            'fill-opacity': 0.5

          }});

          map.addLayer(
          {
            "id": "purp-bnds",
            "type": "fill",
            'source': {
                'type': 'geojson',
                "data": "assets/geoJSON/purp_bnds.json"
              },
              'paint': {
                'fill-color': '#4AAAA7',
                'fill-opacity': 0.5

              }});

              map.addLayer(
              {
                "id": "red-bnds",
                "type": "fill",
                'source': {
                    'type': 'geojson',
                    "data": "assets/geoJSON/red_bnds.json"
                  },
                  'paint': {
                    'fill-color': '#ED1D26',
                    'fill-opacity': 0.5

                  }});

                  map.addLayer(
                  {
                    "id": "yellow-bnds",
                    "type": "fill",
                    'source': {
                        'type': 'geojson',
                        "data": "assets/geoJSON/yellow_bnds.json"
                      },
                      'paint': {
                        'fill-color': '#7D7F81',
                        'fill-opacity': 0.5

                      }});
                      map.addLayer(
                      {
                        "id": "reg_school",
                        "type": "Point",
                        'source': {
                            'type': 'geojson',
                            "data": "assets/geoJSON/reg_school.json"
                          },
                          'paint': {
                            'fill-color': 'red'

                          }});

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
