import "../index.html";
import "../css/style.css";
import getLocationData from "./getLocationData";
import processLocationData from "./processLocationData";

async function main() {
  const json = await getLocationData("Cesena");
  console.warn("JSON:")
  console.log(json);
  const object = processLocationData(json);
  console.warn("Object:")
  console.log(object);
}

document.addEventListener("DOMContentLoaded", () => {
  main();
})
