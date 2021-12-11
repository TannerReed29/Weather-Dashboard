//create object with function of what 
//needs to be called and then 
//feed that data into loop that builds shadow
/*
GIVEN a weather dashboard with form inputs
WHEN I search for a city
THEN I am presented with current and future conditions for that city and that city is added to the search history
WHEN I view current weather conditions for that city
THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index
WHEN I view the UV index
THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe
WHEN I view future weather conditions for that city
THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity
WHEN I click on a city in the search history
THEN I am again presented with current and future conditions for that city
*/
var cityform = document.getElementById("city-form")
var citySearch = document.querySelector("#city-search")



var formSubmit = function(event) {
    event.preventDefault();

    var cityname = citySearch.value.trim();

    if (cityname) {
        currentWeather(cityname);

        citySearch.value = '';
    } else {
        alert("Enter Valid City")
    }
}




cityform.addEventListener('submit', formSubmit);

function currentweather(cityname) {
    var key = '45f52585d5cdf2132a98b097a233ae04';
    fetch('api.openweathermap.org/data/2.5/weather?q=' + cityname+ '&appid=' + key)
    .then(function(resp) { return resp.json() })
    .then(function(data) {
        console.log(data);
    })
    .catch(function() {
        // catch errors
    })
}

/*function weatherBalloon( cityID ) {
    var key = '{yourkey}';
    fetch('https://api.openweathermap.org/data/2.5/weather?id=' + cityID+ '&appid=' + key)  
    .then(function(resp) { return resp.json() }) // Convert data to json
    .then(function(data) {
      console.log(data);
    })
    .catch(function() {
      // catch any errors
    });
  }
  
  window.onload = function() {
    weatherBalloon( 6167865 );
  }
  */