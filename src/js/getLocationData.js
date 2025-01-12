import getTodayFormatted from "./time/getTodayFormatted";

async function getLocationData(location) {
  // https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Cesena/2025-1-12?key=QFH2HFATTUUJLRFDKPWZUE8GQ

  const key = "QFH2HFATTUUJLRFDKPWZUE8GQ";
  const day = getTodayFormatted();

  const query = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/${day}/?key=${key}`;

  const data = await fetch(query, { mode: "cors" });
  const json = await data.json();

  return json;
}

export default getLocationData;
