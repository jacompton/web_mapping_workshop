///////////////////////////////////////////////////////////////////////////
// Enter your mapbox map id here to reference it for the base layer

var mapId = 'jacompton.l8mm66gl'; //<- this references the ugly green map that I made
var token = 'pk.eyJ1IjoiamFjb21wdG9uIiwiYSI6IlJFOXlUNXcifQ.G3sRa4kEZCJVwIZblWVhTg'; //<- this is my token, use yours.

//Create the map object with your mapId and token
L.mapbox.accessToken = token;
var map = L.mapbox.map('map', mapId);

//Set the view of the map to the whole US
map.setView([39, -96], 4);
//add data
var dataFileToAdd = 'data/fastfood.geojson';

var featureLayer = L.mapbox.featureLayer();
    featureLayer.loadURL(dataFile2ToAdd);
    featureLayer.addTo(map);
    featureLayer.on('ready', function(){this.setStyle({
      "marker-color":"#333333",
      "marker-size":"medium"
    });

var dataFile2ToAdd = 'data/jim.geojson';

var featureLayer2 = L.mapbox.featureLayer();
    featureLayer2.loadURL(dataFileToAdd);
    featureLayer2.addTo(map);
    featureLayer2.on('ready', function(){this.setStyle({
      "marker-color":"#777777",
      "marker-size":"medium"
    });


    map.fitBounds(featureLayer.getBounds());
    });
