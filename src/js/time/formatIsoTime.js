import toEuropeanTimeFormat from "./toEuropeanTimeFormat";
import removeSeconds from "./removeSeconds";

function formatIsoTime(date) {
  let split = date.split("T");
  return `${toEuropeanTimeFormat(split[0])}, ${removeSeconds(split[1])}`;
}

export default formatIsoTime;
