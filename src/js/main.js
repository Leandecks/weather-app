import "../index.html";
import "../css/style.css";
import getLocationData from "./getLocationData";
import processLocationData from "./processLocationData";
import displayData from "./displayData";

document.addEventListener("DOMContentLoaded", () => {
  const inputField = document.querySelector("#location");
  const submitButton = document.querySelector("#submit");

  let isRequest = false;

  if (!isRequest) {
    request("London");
    isRequest = true;
  }

  submitButton.addEventListener("click", (e) => {
    e.preventDefault();
    request(inputField.value);
    isRequest = true;
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
