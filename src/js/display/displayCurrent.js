function displayCurrent(data) {
  const container = document.querySelector("#weather");
  const city = container.querySelector("#city");
  const fullplace = container.querySelector("#fullplace");
  const coords = container.querySelector("#coords");
  const description = container.querySelector("#description");
  const alerts = container.querySelector("#alerts");
  const conditions = container.querySelector("#conditions");
  const temperature = container.querySelectorAll(".temperature");
  const feelsLike = container.querySelector("#feels-like");
  const dew = container.querySelector("#dew");
  const humidity = container.querySelector("#humidity");
  const rainFall = container.querySelector("#rain-fall");
  const rainProbability = container.querySelector("#rain-probability");
  const rainType = container.querySelector("#rain-type");
  const pressure = container.querySelector("#pressure");
  const snowFall = container.querySelector("#snow-fall");
  const snowDepth = container.querySelector("#snow-depth");
  const sunrise = container.querySelector("#sunrise");
  const sunset = container.querySelector("#sunset");
  const windDirection = container.querySelector("#wind-direction");
  const windSpeed = container.querySelector("#wind-speed");
  const windSpeedKmh = container.querySelector("#wind-speed-kmh");
  const windCurrentSpeed = container.querySelector("#wind-current-speed");
  const windCurrentSpeedKmh = container.querySelector(
    "#wind-current-speed-kmh",
  );
  const solarEnergy = container.querySelector("#solar-energy");
  const visibility = container.querySelector("#visibility");

  const time = document.querySelector("#time");
  const cityIcon = document.querySelector("#city-icon");

  city.textContent = data.place;
  cityIcon.className = "";
  cityIcon.classList.add("nf");
  cityIcon.classList.add(data.current.icon);
  fullplace.textContent = data.fullPlace;
  coords.textContent = `${data.coordinates.latitude}, ${data.coordinates.longitude}`;
  description.textContent = data.description;

  alerts.textContent = "";

  if (data.alerts.length === 0) {
    const alert = document.createElement("p");
    alert.textContent = "There are no alerts.";
    alerts.appendChild(alert);
  } else {
    for (let i = 0; i < data.alerts.length; i++) {
      const alert = document.createElement("p");
      alert.textContent = data.alerts[i].event;
      alerts.appendChild(alert);
    }
  }

  conditions.textContent = data.current.conditions;

  [...temperature].forEach((temp) => {
    temp.textContent = data.current.temperature;
  });

  feelsLike.textContent = data.current.feelsLike;
  dew.textContent = data.current.dew;
  humidity.textContent = data.current.humidity;
  rainFall.textContent = data.current.precipitation.fall;
  rainProbability.textContent = data.current.precipitation.probability;
  rainType.textContent = data.current.precipitation.type;
  pressure.textContent = data.current.pressure;
  snowFall.textContent = data.current.snow.fall;
  snowDepth.textContent = data.current.snow.depth;
  sunrise.textContent = data.current.sunrise;
  sunset.textContent = data.current.sunset;
  windDirection.textContent = data.current.wind.direction;
  windSpeed.textContent = data.current.wind.speed;
  windSpeedKmh.textContent = data.current.wind.speedKmh;
  windCurrentSpeed.textContent = data.current.wind.currentSpeed;
  windCurrentSpeedKmh.textContent = data.current.wind.currentSpeedKmh;
  solarEnergy.textContent = data.current.solarEnergy;
  visibility.textContent = data.current.visibility;

  time.textContent = data.current.time;
}

export default displayCurrent;
