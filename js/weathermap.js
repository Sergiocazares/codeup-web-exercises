"use strict";
(function () {
    var weatherURL = "https://api.openweathermap.org/data/2.5/forecast";

    $.get(weatherURL, {
        "APPID": OWM_TOKEN,
        "q": "Dallas, US",
        "units": "imperial"
    }).done(function (data) {
        console.log(data);
    })


}());