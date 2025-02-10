import "../index.html";
import "../css/style.css";
import getLocationData from "./getLocationData";
import processLocationData from "./processLocationData";

document.addEventListener("DOMContentLoaded", () => {
  const inputField = document.querySelector("#location");
  const submitButton = document.querySelector("#submit");

  submitButton.addEventListener("click", (e) => {
    e.preventDefault();
    request(inputField.value);
  });
});

async function request(place) {
  const json = await getLocationData(place);

  if (!json) {
    console.error("No json");
  } else {
    console.warn("JSON:");
    console.log(json);

    const object = processLocationData(json);
    console.warn("Object:");
    console.log(object);

    displayData(object);
  }
}

function displayData(data) {
  const container = document.querySelector("#weather");
  const city = container.querySelector("#city");
  const fullplace = container.querySelector("#fullplace");
  const coords = container.querySelector("#coords");
  const description = container.querySelector("#description");
  const alerts = container.querySelector("#alerts");

  city.textContent = data.place;
  fullplace.textContent = data.fullPlace;
  coords.textContent = `${data.coordinates.latitude} ${data.coordinates.longitude}`;
  description.textContent = data.description;

  for (let i = 0; i < data.alerts.length; i++) {
    const alert = document.createElement("p");
    alert.textContent = data.alerts[i].event;
    alerts.appendChild(alert);
  }
}
