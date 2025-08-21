import "../index.html";
import "../css/style.css";
import getLocationData from "./api/getLocationData";
import processLocationData from "./api/processLocationData";
import displayData from "./display/displayData";

document.addEventListener("DOMContentLoaded", () => {
  const inputField = document.querySelector("#location");
  const submitButton = document.querySelector("#submit");

  let isRequest = false;

  if (!isRequest) {
    request("Berlin");
    isRequest = true;
  }

  submitButton.addEventListener("click", (e) => {
    e.preventDefault();
    request(inputField.value);
    isRequest = true;
    inputField.value = "";
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
