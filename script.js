async function fetchWeather(city) {
  const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "19a26918f2mshbe4e1ed024081f3p194cebjsnf2318f01cd23",
      "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    const temp = data.temp;
    const degre="\u00B0";
    document.getElementById("deg").textContent = temp+degre+"c";
    // document.getElementById("degre").textContent=&deg;+"c";
  } catch (error) {
    console.error(error);
  }
}

const cityForm = document.getElementById("cityForm");
cityForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const cityInput = document.getElementById("search");
  const cityName = cityInput.value;
const uppercase=cityName.toUpperCase();
  document.getElementById("loc").textContent = uppercase;

  fetchWeather(cityName);

  cityInput.value = "";

});
