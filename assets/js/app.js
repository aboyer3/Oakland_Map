var map, featureList, boroughSearch = [];

mapboxgl.accessToken = 'pk.eyJ1IjoiYWJveWVyIiwiYSI6ImNpZ3Y1bTN1cTBod2x2cW0zejJyeDRwOWUifQ.pNbGU-s0cDtU_PW9pBsL4w';
var map = new mapboxgl.Map({
container: 'map',
style: '\mapbox://styles/mapbox/light-v9',
center: [-122.265244, 37.791167], // starting position
zoom: 11.90 // starting zoom
});

map.addControl(new mapboxgl.NavigationControl());

map.on('load', function () {
  map.addLayer(
    {
        "id": "blue-bnds",
        "type": "fill",
        'source': {
            'type': 'geojson',
            "data": "https://raw.githubusercontent.com/aboyer3/Oakland_Map/master/assets/geoJSON/blue_bnds.json"
          },
          'paint': {
            'fill-color': '#0BCBF5',
            'fill-opacity': 0.5



          }});

  map.addLayer(
  {
    "id": "orange-bnds",
    "type": "fill",
    'source': {
        'type': 'geojson',
        "data": "https://raw.githubusercontent.com/aboyer3/Oakland_Map/master/assets/geoJSON/orange_bnds.json"
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
            "data": "https://raw.githubusercontent.com/aboyer3/Oakland_Map/master/assets/geoJSON/green_bnds.json"
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
                "data": "https://raw.githubusercontent.com/aboyer3/Oakland_Map/master/assets/geoJSON/purp_bnds.json"
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
                    "data": "https://raw.githubusercontent.com/aboyer3/Oakland_Map/master/assets/geoJSON/red_bnds.json"
                  },
                  'paint': {
                    'fill-color': '#ED1D26',
                    'fill-opacity': 0.2

                  }});

                  map.addLayer(
                  {
                    "id": "yellow-bnds",
                    "type": "fill",
                    'source': {
                        'type': 'geojson',
                        "data": "https://raw.githubusercontent.com/aboyer3/Oakland_Map/master/assets/geoJSON/yellow_bnds.json"
                      },
                      'paint': {
                        'fill-color': '#7D7F81',
                        'fill-opacity': 0.5

                      }});

                      map.addLayer(
                  {
                    "id": "reg-school",
                    "type": "symbol",
                    'source': {
                        'type': 'geojson',
                        "data": "https://raw.githubusercontent.com/aboyer3/Oakland_Map/master/assets/geoJSON/reg_school.json"
                      },
                        "layout": {
            "icon-image": "marker-15",
            "text-field": "{schnam}",
            "text-size": 12,
            "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
            "text-offset": [0, 0.6],
            "text-anchor": "top"
        },"paint": {
                    "text-color": "#202",
                    "text-halo-color": "#fff",
                    "text-halo-width": 2
                }
              });

                map.addLayer(
                  {
                    "id": "charter-school",
                    "type": "symbol",
                    'source': {
                        'type': 'geojson',
                        "data": "https://raw.githubusercontent.com/aboyer3/Oakland_Map/master/assets/geoJSON/charter_school.json"
                      },
                        "layout": {
            "icon-image": "marker-15",
            "text-field": "{schnam}",
            "text-size": 12,
            "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
            "text-offset": [0, 0.6],
            "text-anchor": "top",
            'visibility': 'none'
        },"paint": {
                    "text-color": "#202",
                    "text-halo-color": "#fff",
                    "text-halo-width": 2
                }
              });
                     map.addLayer(
                  {
                    "id": "sped-school",
                    "type": "symbol",
                    'source': {
                        'type': 'geojson',
                        "data": "https://raw.githubusercontent.com/aboyer3/Oakland_Map/master/assets/geoJSON/sped_school.json"
                      },
                        "layout": {
            "icon-image": "marker-15",
            "text-field": "{schnam}",
            "text-size": 12,
            "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
            "text-offset": [0, 0.6],
            "text-anchor": "top",
            'visibility': 'none'
        },"paint": {
                    "text-color": "#202",
                    "text-halo-color": "#fff",
                    "text-halo-width": 2
                }
              });

           map.addLayer(
                  {
                    "id": "alt-school",
                    "type": "symbol",
                    'source': {
                        'type': 'geojson',
                        "data": "https://raw.githubusercontent.com/aboyer3/Oakland_Map/master/assets/geoJSON/alt_school.json"
                      },
                        "layout": {
            "icon-image": "marker-15",
            "text-field": "{schnam}",
            "text-size": 12,
            "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
            "text-offset": [0, 0.6],
            "text-anchor": "top",
            'visibility': 'none'
        },"paint": {
                    "text-color": "#202",
                    "text-halo-color": "#fff",
                    "text-halo-width": 2
                }
              });

map.on('click', 'blue-bnds', function (e) {
        new mapboxgl.Popup()
            .setLngLat(e.lngLat)
            .setHTML(e.features[0].properties.SCHNAME+" Boundary")
            .addTo(map);
    });


      });

      var toggleableLayerIds = [ 'alt-school', 'charter-school','reg-school','sped-school' ];
      var layer_label = [ 'Alternative', 'Charter','OUSD School','Special Education' ];


for (var i = 0; i < toggleableLayerIds.length; i++) {
    var id = toggleableLayerIds[i];

    var link = document.createElement('a');
    link.href = '#';
    link.className = 'active';
    link.textContent = layer_label[i];
    link.id = id;

    link.onclick = function (e) {
        var clickedLayer = this.id;
        e.preventDefault();
        e.stopPropagation();

        var visibility = map.getLayoutProperty(clickedLayer, 'visibility');

        if (visibility === 'visible') {
            map.setLayoutProperty(clickedLayer, 'visibility', 'none');
            this.className = '';
        } else {
            this.className = 'active';
            map.setLayoutProperty(clickedLayer, 'visibility', 'visible');
        }
    };

    var layers = document.getElementById('menu');
    layers.appendChild(link);
}



    /*geojson.source.features.forEach(function(marker) {
    // create a DOM element for the marker
    var el = document.createElement('div');
    el.className = 'marker';
    el.style.width = marker.properties.iconSize[0] + 'px';
    el.style.height = marker.properties.iconSize[1] + 'px';

    el.addEventListener('click', function() {
        window.alert(marker.properties.schnam);
    });

    // add marker to map
    new mapboxgl.Marker(el, {offset: [-marker.properties.iconSize[0] / 2, -marker.properties.iconSize[1] / 2]})
        .setLngLat(marker.geometry.coordinates)
        .addTo(map);
});*/

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
