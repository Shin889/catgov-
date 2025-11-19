
function catanduanes_map_shortcode() {
    ob_start(); ?>
    <div id="catMap" style="width:100%; height:600px;"></div>

    <div id="mapModal" style="display:none; position:fixed; top:0; left:0; width:100%; height:100%; 
         background:rgba(0,0,0,0.6); z-index:9999; justify-content:center; align-items:center;">
      <div style="background:#fff; padding:20px; border-radius:8px; width:400px; max-width:90%;">
        <h2 id="modalTitle"></h2>
        <p id="modalContent"></p>
        <button onclick="document.getElementById('mapModal').style.display='none'">Close</button>
      </div>
    </div>

    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"/>
    <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
    <style>
      .legend {
        background: white;
        padding: 10px;
        line-height: 1.4em;
        box-shadow: 0 0 6px rgba(0,0,0,0.3);
        border-radius: 6px;
        font-size: 13px;
      }
      .legend strong {
        display: block;
        margin-bottom: 5px;
      }
    </style>
    <script>
      document.addEventListener("DOMContentLoaded", function(){
        var map = L.map('catMap').setView([13.8,124.2], 10);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          maxZoom: 19,
          attribution: '&copy; OpenStreetMap contributors'
        }).addTo(map);

        var municipalities = {
          "Virac": 76379,
          "Bato": 21548,
          "San Andres": 38199,
          "Baras": 13575,
          "San Miguel": 15040,
          "Bagamanoc": 12326,
          "Viga": 21038,
          "Panganiban": 9651,
          "Caramoran": 30242,
          "Gigmoto": 8704,
          "Pandan": 8681
        };

        var geojsonData = {
          "type": "FeatureCollection",
          "features": [
            {
              "type": "Feature",
              "properties": { "NAME_2": "Virac" },
              "geometry": {
                "type": "Polygon",
                "coordinates": [[[124.2,13.6],[124.25,13.6],[124.25,13.7],[124.2,13.7],[124.2,13.6]]]
              }
            },
            {
              "type": "Feature",
              "properties": { "NAME_2": "Bato" },
              "geometry": {
                "type": "Polygon",
                "coordinates": [[[124.25,13.6],[124.3,13.6],[124.3,13.7],[124.25,13.7],[124.25,13.6]]]
              }
            }
            // ⚠️ Add remaining municipalities here with their real coordinates
          ]
        };

        // Draw GeoJSON
        L.geoJSON(geojsonData, {
          style: {
            color: "#2b8cbe",
            weight: 1,
            fillOpacity: 0.6
          },
          onEachFeature: function(feature, layer) {
            var name = feature.properties.NAME_2;
            var pop = municipalities[name] ? municipalities[name].toLocaleString() : "N/A";
            layer.on("click", function() {
              document.getElementById("modalTitle").innerText = name;
              document.getElementById("modalContent").innerText = "Population: " + pop;
              document.getElementById("mapModal").style.display = "flex";
            });
          }
        }).addTo(map);

        // Legend
        var legend = L.control({position: 'bottomright'});
        legend.onAdd = function (map) {
          var div = L.DomUtil.create('div', 'legend');
          div.innerHTML = "<strong>Catanduanes Population</strong>";
          for (var m in municipalities) {
            div.innerHTML += m + ": " + municipalities[m].toLocaleString() + "<br>";
          }
          return div;
        };
        legend.addTo(map);
      });
    </script>
    <?php
    return ob_get_clean();
}
add_shortcode('catanduanes_map', 'catanduanes_map_shortcode');