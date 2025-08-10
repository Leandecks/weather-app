import getWeekday from "../time/getWeekday";

function displayFuture(data) {
  const container = document.querySelector("#next-days");
  const day2Name = container.querySelector("#day2>h4");
  const day3Name = container.querySelector("#day3>h4");
  const icons = container.querySelectorAll("i");
  const conditions = container.querySelectorAll(".conditions");
  const temperature = container.querySelectorAll(".temperature");
  const minmax = container.querySelectorAll(".minmax");
  const precipitation = container.querySelectorAll(".precipitation");

  const RAIN_COLOR = "#11dfff";
  const BASE_COLOR = "#fefae0";

  for (let i = 0; i < icons.length; i++) {
    const minTemperature = minmax[i].querySelector(".min-temp");
    const maxTemperature = minmax[i].querySelector(".max-temp");

    icons[i].classList = "";
    icons[i].classList.add("nf");
    icons[i].classList.add(data.future[i].icon);

    conditions[i].textContent = data.future[i].conditions;
    temperature[i].textContent = "Ø of " + data.future[i].temperature + " °C";
    minTemperature.textContent = data.future[i].minTemperature + " °C";
    maxTemperature.textContent = data.future[i].maxTemperature + " °C";
    precipitation[i].textContent = data.future[i].rainChance + " % rain chance";

    if (data.future[i].rainChance >= 1) {
      precipitation[i].style.backgroundColor = RAIN_COLOR;
    } else {
      precipitation[i].style.backgroundColor = BASE_COLOR;
    }
  }

  day2Name.textContent = getWeekday(2);
  day3Name.textContent = getWeekday(3);
}

export default displayFuture;
