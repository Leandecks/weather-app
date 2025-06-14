import displayCurrent from "./displayCurrent";
import displayAlerts from "./displayAlerts";
import displayGenerics from "./displayGenerics";
import displayFuture from "./displayFuture";

function displayData(data) {
  displayGenerics(data);
  displayAlerts(data);
  displayCurrent(data);
  displayFuture(data);
}

export default displayData;
