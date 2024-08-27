async function fetchWeather(city) {
  const url = `https://open-weather13.p.rapidapi.com/city/${city}/EN`;
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "32165a3bddmsh3ca8e521c547b6bp185a1ajsn363d9ec7a040",
      "x-rapidapi-host": "open-weather13.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.text();
    const resultData = JSON.parse(result);
    const farenheit = ((resultData.main.temp - 32) * 5) / 9;
    document.getElementById("deg").textContent = `${farenheit.toFixed(2)}°C`;
  } catch (error) {
    document.getElementById("deg").textContent = error;
  }
}

const cityForm = document.getElementById("cityForm");
cityForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const cityInput = document.getElementById("search");
  const cityName = cityInput.value;
  const uppercase = cityName.toUpperCase();
  document.getElementById("loc").textContent = uppercase;

  fetchWeather(cityName);

  cityInput.value = "";
});
