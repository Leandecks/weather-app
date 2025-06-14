function displayCurrent(data) {
  const container = document.querySelector("#weather");
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
