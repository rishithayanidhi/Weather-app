const apikey = "Your-api-key";
const WeatherIcon = document.querySelector(".weather-icon");

async function checkWeather() {
  var input = document.getElementById("input").value;

  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${input}&appid=${apikey}`;

  const response = await fetch(apiUrl);

  if(response.status == 404){
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  }else{

    var data = await response.json();

    if(data.weather[0].main == "Clouds"){
      WeatherIcon.src="/images/clouds.png";
    }
    else if(data.weather[0].main == "Clear"){
      WeatherIcon.src="images/clear.png";
    }
    else if(data.weather[0].main == "Rain"){
      WeatherIcon.src="images/rain.png";
    }
    else if(data.weather[0].main == "Drizzle"){
      WeatherIcon.src="images/drizzle.png";
    }
    else if(data.weather[0].main == "Mist"){
      WeatherIcon.src="images/mist.png";
    }
    
    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";

  }

  var Wind = document.getElementById("Wind");
  var humidity = document.getElementById("humidity");
  var heading = document.getElementById("heading");
  temperature.innerHTML = Math.round(data.main.temp) + "°c";
  heading.innerHTML = data.name;
  Wind.innerHTML=data.wind.speed + " Km/h";
  humidity.innerHTML=data.main.humidity + "%";


  // Add "Enter" key event listener to trigger the search
  document.getElementById("input").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
      checkWeather(); // Call checkWeather when "Enter" is pressed
    }
  });

}
