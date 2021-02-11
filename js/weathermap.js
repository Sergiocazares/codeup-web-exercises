"use strict";
(function () {
    //Creating the Mapbox Map
    mapboxgl.accessToken = MAPBOX_TOKEN;
    let map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/dark-v10', // stylesheet location
        center: [-96, 37.8], // starting position [lng, lat]
        zoom: 3,  // starting zoom

    });

    //Searches for and places a marker on the location the user types in by using geocoding. The marker is also draggable.
    function searchLocation(location) {

        geocode(location, MAPBOX_TOKEN)
            .then(function (result) {
                getCurrentWeather(result[0], result[1]);
                getForecast(result[0], result[1]);
                return result;
            }).then(function (data) {
            map.flyTo({
                center: data,
                zoom: 11});
            var marker = new mapboxgl.Marker({
                draggable: true,
            })
                .setLngLat(data)
                .addTo(map);
            //allows user to drag the marker
            function dragMarker() {
                var dragLocation = marker.getLngLat();
                getCurrentWeather(dragLocation.lng, dragLocation.lat);
                getForecast(dragLocation.lng, dragLocation.lat);
                map.flyTo({
                    center: [dragLocation.lng, dragLocation.lat],
                    zoom: 11,
                })
            }

            marker.on('dragend', dragMarker)

        });
    }

    //default location when the page loads
    searchLocation("Dallas , Tx");

    //retrieves the user's input in the search bar
    $("#userSubmit").click(function (e) {
        e.preventDefault();
        var location = $("#userInput").val().trim();
        //making sure the search isn't empty
        if (location !== "") {
            searchLocation(location);
        }
    });


    //Links to get the forecast and current weather
    var forecastURL = "https://api.openweathermap.org/data/2.5/forecast";
    var weatherURL = "https://api.openweathermap.org/data/2.5/weather";



    /*     Below is the function to return the 5day forecast     */
    function getForecast(lng,lat) {
        $.get(forecastURL, {
            "APPID": OWM_TOKEN,
            "lon": lng,
            "lat": lat,
            "units": "imperial"
        }).done(function (data) {
            //everytime the location changes, it refreshes the container.
            $(".forecast-container").empty();
            for (let i = 0; i <= data.list.length - 1; i += 8) {
                let date = data.list[i].dt_txt.substring(5, 10).split("-").join("-");
                let description = data.list[i].weather[0].description;
                let maxTemp = Math.round(data.list[i].main.temp_max);
                let minTemp = Math.round(data.list[i].main.temp_min);
                let humidity = data.list[i].main.humidity;
                let finalHtml = "";

                finalHtml += `<div class= "card daily-card mb-2 border-none">`
                finalHtml += `<div class = "card-body">`
                finalHtml += `<div class= "date quicksand">${date}</div>`
                finalHtml += `<p class= "description">${description}</p>`
                finalHtml += `<p class= "temp">${maxTemp}°F / ${minTemp}°F </p>`
                finalHtml += `<p class= "humidity">Humidity: ${humidity}%</p>`
                finalHtml += `</div>`
                finalHtml += `</div>`

                //adds each card to the forecast container
                $('.card-group').append(finalHtml);
            }
        })
    }

    /*     Below is the function to return the current weather     */
    function getCurrentWeather(lng,lat) {
        $.get(weatherURL, {
            "APPID": OWM_TOKEN,
            "lon": lng,
            "lat": lat,
            "units": "imperial"
        }).done(function (data) {
            $(".current-container").empty();
            var today = new Date();
            var time = today.toLocaleString('en-US', { hour: 'numeric', hour12: true, minute: 'numeric' })
            var date = (today.getMonth()+1) + '/' + today.getDate() + '/' + today.getFullYear();
            var city = data.name;
            var temp = Math.round(data.main.temp);
            var iconcode = "https://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png";
            var wind = data.wind.speed;
            var humidity = data.main.humidity;

            var finalHtml =
                "<h3 class=\"card-title quicksand font-weight-bold\">"+ city +"</h3>" +
                "<h5 class=\"text-muted raleway\">" + date + "<br>" + time + "</h5>" +
                "<div class='d-flex flex-column'>" +
                "<div id=\"icon\"><img id=\"wicon\" src=\"\" alt=\"Weather icon\" ></div>" +
                "<p class=\"display-3 degree quicksand\">"+ temp +"<span class=\"fahrenheit align-text-top\">°F</span></p>" +
                "</div>" +
                "<div class=\"mb-4\">" +
                "<p class='raleway'><i class=\"fas fa-tint fa-lg text-info pr-2\"></i>Humidity: "+ humidity +"%</p>" +
                "<p class='raleway'><i class=\"fas fa-leaf fa-lg grey-text pr-2\"></i>Winds: "+ wind +"mph</p>" +
                "</div>"

            $('.current-container').append(finalHtml);
            $('#wicon').attr('src', iconcode);
        })
    }

}());