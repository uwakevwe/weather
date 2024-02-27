<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Weather App</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      text-align: center;
    }
    #weather {
      margin-top: 50px;
    }
  </style>
</head>
<body>
  <h2>Weather App</h2>
  <input type="text" id="cityInput" placeholder="Enter city name">
  <button onclick="getWeather()">Get Weather</button>
  <div id="weather"></div>

  <script>
    async function getWeather() {
      const apiKey = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API key
      const city = document.getElementById('cityInput').value;
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log(data);

        if (data.cod === 200) {
          const weatherInfo = `
            <h3>Weather in ${data.name}</h3>
            <p>Temperature: ${data.main.temp}°C</p>
            <p>Description: ${data.weather[0].description}</p>
            <p>Humidity: ${data.main.humidity}%</p>
            <p>Wind Speed: ${data.wind.speed} m/s</p>
          `;
          document.getElementById('weather').innerHTML = weatherInfo;
        } else {
          document.getElementById('weather').innerHTML = `<p>${data.message}</p>`;
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
  </script>
</body>
</html>
