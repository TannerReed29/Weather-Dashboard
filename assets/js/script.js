
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
var cityform = document.getElementById("city-form");
var citySearch = document.querySelector("#city-search");
var currentinfo = document.getElementById("current-info");
var currentcity = document.getElementById("current-city");
var tempdata = document.getElementById('temp');
var humiddata = document.getElementById('humidity')
var windEl = document.getElementById('wind')
var uvEl = document.getElementById('UV')
var weekEl = document.getElementById('week-info')
var daysEl = document.getElementById('days')

var formSubmit = function(event) {
    event.preventDefault();

    var cityname = citySearch.value.trim();
    console.log(cityname);
    if (cityname)
    {
        currentweather(cityname);
        forecast(cityname);
        citySearch.value = '';
    }
    else
    {
        window.alert("Enter Valid City")
    }
}

cityform.addEventListener('submit', formSubmit);

function currentweather(name) 
{
    var key = '45f52585d5cdf2132a98b097a233ae04';
              
    fetch('http://api.openweathermap.org/data/2.5/weather?q=' + name + '&appid=' + key + '&units=imperial')
        .then(function(resp) 
            {
                return resp.json() 
            }
        )
        .then(function(data)
            {
                //city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index
                console.log(data);
                console.log(data.main.temp + " F");
                // creating elements
                var city = document.createElement('h3');
                    city.className = 'current-city';

                var dateEl = document.createElement('h4');

                var icon = document.createElement('img');

                var temp = document.createElement('p');
                    temp.className = 'temp-data';

                var humidity = document.createElement('p');
                    humidity.className = 'humid-data'; 

                var ws = document.createElement('p');
                    ws.className = 'wind-data';

                var uv = document.createElement('p');
                    uv.className = 'uv-data';

                // set text of elements
                city.textContent = data.name;
//                dateEl.textContent = Date.now ;
                icon.textContent = data.weather.icon;
                temp.textContent = "Temp: " + data.main.temp + " °F";
                humidity.textContent = "Humidity: " + data.main.humidity + " %";
                ws.textContent = "Wind: " + data.wind.speed + " MPH";
                uv.textContent = "UV Index: " + data.sys.type;



                
                //append dynamic html to associated div
                currentcity.append(city);

//                currentinfo.append(dateEl);

                currentinfo.append(icon);

                tempdata.append(temp);

                humiddata.append(humidity);

                windEl.append(ws);

                uvEl.append(uv);
            }
        )
        .catch(function() 
            {
                // catch errors
            }
        );
}

//function forecast 
function forecast(name) 
{
    var key = '45f52585d5cdf2132a98b097a233ae04';
              
    fetch('http://api.openweathermap.org/data/2.5/forecast/?q=' + name + '&units=imperial&appid=' + key)
        .then(function(resp) 
            {
                return resp.json() 
            }
        )
        .then(function(data)
            {
                //city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index
                console.log(data);


                // creating elements
                for(var i=0; i < data.list.length;i += 8) {

                    var dateEl = document.createElement('h4');
                    
                    var icon = document.createElement('img');
                    
                    var temp = document.createElement('p');
                    
                    var humidity = document.createElement('p');
                    
                    
                    var ws = document.createElement('p');
                    
                    
                    
                    // set text of elements
                    
                    
                    
                    dateEl.textContent = data.list[i].dt_txt;
                    icon.textContent = data.list[i].weather.icon;
                    temp.textContent = "Temp: " + data.list[i].main.temp + " °F";
                    humidity.textContent = "Humidity: " + data.list[i].main.humidity + " %";
                    ws.textContent = "Wind: " + data.list[i].wind.speed + " MPH";
                    
                    
                    
                    
                    //append dynamic html to associated div
                    
                    daysEl.append(dateEl);
                    
                    daysEl.append(icon);
                    
                    daysEl.append(temp);
                    
                    daysEl.append(humidity);
                    
                    daysEl.append(ws);
                }
                    
                
            }
        )
        .catch(function() 
            {
                // catch errors
            }
        );
}


