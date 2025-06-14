import getWeekday from "../time/getWeekday";

function displayFuture(data) {
  const container = document.querySelector("#next-days");
  const day2Name = container.querySelector("#day2>h4");
  const day3Name = container.querySelector("#day3>h4");

  day2Name.textContent = getWeekday(2);
  day3Name.textContent = getWeekday(3);
}

export default displayFuture;
