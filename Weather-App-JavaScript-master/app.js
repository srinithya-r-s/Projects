// Tutorial by http://youtube.com/CodeExplained
// api key : 82005d27a116c2880c8f0fcb866998a0

// SELECT ELEMENTS
const iconElement = document.querySelector(".weather-icon");
const tempElement = document.querySelector(".temperature-value p");
const descElement = document.querySelector(".temperature-description p");
const locationElement = document.querySelector(".location p");
const notificationElement = document.querySelector(".notification");

// App data
const weather = {};

weather.temperature = {
    unit : "celsius"
}

// APP CONSTS AND VARS
const KELVIN = 273;
// API KEY
const key = "82005d27a116c2880c8f0fcb866998a0";

// CHECK IF BROWSER SUPPORTS GEOLOCATION
if('geolocation' in navigator){
    navigator.geolocation.getCurrentPosition(setPosition, showError);
}else{
    notificationElement.style.display = "block";
    notificationElement.innerHTML = "<p>Browser doesn't Support Geolocation</p>";
}

// SET USER'S POSITION
function setPosition(position){
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    
    getWeather(latitude, longitude);
}

// SHOW ERROR WHEN THERE IS AN ISSUE WITH GEOLOCATION SERVICE
function showError(error){
    notificationElement.style.display = "block";
    notificationElement.innerHTML = `<p> ${error.message} </p>`;
    console.log(error);
}

// GET WEATHER FROM API PROVIDER
function getWeather(latitude, longitude){
    let api = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}`;
    
    fetch(api)
        .then(function(response){
            let data = response.json();
            return data;
        })
        //.then(function(response){
         //  let data = response.json();
         //   return data;
       // }) This is where things start happening after the 
        //request has been sent. Once the data comes back from the server,
        // the first .then() block is triggered.
        .then(function(data){
            weather.temperature.value = Math.floor(data.main.temp - KELVIN);
            weather.description = data.weather[0].description;
            weather.iconId = data.weather[0].icon;
            weather.city = data.name;
            weather.country = data.sys.country;
        })
        .then(function(){
            displayWeather();
        });
}

// DISPLAY WEATHER TO UI
function displayWeather(){
    iconElement.innerHTML = `<img src="icons/${weather.iconId}.png"/>`;
    tempElement.innerHTML = `${weather.temperature.value}°<span>C</span>`;
    descElement.innerHTML = weather.description;
    locationElement.innerHTML = `${weather.city}, ${weather.country}`;
}

// C to F conversion
function celsiusToFahrenheit(temperature){
    return (temperature * 9/5) + 32;
}

// WHEN THE USER CLICKS ON THE TEMPERATURE ELEMENET
tempElement.addEventListener("click", function(){
    if(weather.temperature.value === undefined) return;
    
    if(weather.temperature.unit == "celsius"){
        let fahrenheit = celsiusToFahrenheit(weather.temperature.value);
        fahrenheit = Math.floor(fahrenheit);
        
        tempElement.innerHTML = `${fahrenheit}°<span>F</span>`;
        weather.temperature.unit = "fahrenheit";
    }else{
        tempElement.innerHTML = `${weather.temperature.value}°<span>C</span>`;
        weather.temperature.unit = "celsius"
    }
});



// 0 index to store the clouds
//What is data.main.temp?
//In the weather data returned from the API, there's an object called main, which holds temperature information. The temp field specifically 
//contains the temperature in Kelvin (a unit of temperature).
//ata.main.temp: This gives us the temperature in Kelvin.
//data.main.temp - KELVIN: To convert the temperature from Kelvin to Celsius, we subtract 273 (the constant value for Kelvin to Celsius conversion).
//Math.floor(): This function rounds the result down to the nearest whole number.
//Finally, the Celsius temperature is stored in weather.temperature.value.
//Step 2: Accessing weather description
//What is data.weather[0].description?
//The weather conditions are stored in the weather array. We access the first item (weather[0]), which contains a description (e.g., "clear sky", "rain").
//This description is stored in weather.description.
//Step 3: Accessing the weather icon ID
//What is data.weather[0].icon?
//Similar to the weather description, the icon that represents the weather condition is stored in data.weather[0].icon. This gives us the icon ID that we can use to display an image (e.g., sunny, cloudy, etc.).
//This icon ID is stored in weather.iconId.
//Step 4: Accessing city and country
//What is data.name and data.sys.country?
//data.name: This field contains the name of the city where the weather information was collected.
//data.sys.country: This field contains the country code (e.g., "US" for the United States).
//We store these in weather.city and weather.country.
