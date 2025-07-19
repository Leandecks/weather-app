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

  for (let i = 0; i < icons.length; i++) {
    icons[i].classList = "";
    icons[i].classList.add("nf");
    icons[i].classList.add(data.future[i].icon);

    conditions[i].textContent = data.future[i].conditions;
    temperature[i].textContent = data.future[i].temperature + " °C";
    minmax[i].textContent =
      data.future[i].minTemperature +
      " °C ~ " +
      data.future[i].maxTemperature +
      " °C";
    precipitation[i].textContent = data.future[i].rainChance + " % rain chance";
  }

  day2Name.textContent = getWeekday(2);
  day3Name.textContent = getWeekday(3);
}

export default displayFuture;
