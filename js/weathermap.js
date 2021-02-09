"use strict";
(function () {

    mapboxgl.accessToken = MAPBOX_TOKEN;

    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/dark-v10', // stylesheet location
        center: [-96.7970, 32.7767], // starting position [lng, lat]
        zoom: 3// starting zoom
    });

    var userInput =
        function placeMarker(info, token, map) {
            geocode(info.address, token).then(function(coordinates) {
                var marker = new mapboxgl.Marker()
                    .setLngLat(coordinates)
                    .addTo(map)
            });
        }

    var weatherURL = "https://api.openweathermap.org/data/2.5/forecast";

    $.get(weatherURL, {
        "APPID": OWM_TOKEN,
        "q": "Dallas, US",
        "lon": lng,
        "lat": lat,
        "units": "imperial"
    }).done(function (data) {
        console.log(data);
    })


}());