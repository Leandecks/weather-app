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
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const inputField = document.querySelector("#location");
  const submitButton = document.querySelector("#submit");

  submitButton.addEventListener("click", (e) => {
    e.preventDefault();
    console.log(inputField, inputField.value);
    request(inputField.value);
  });
});
