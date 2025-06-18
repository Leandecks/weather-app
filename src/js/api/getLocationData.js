import getTodayFormatted from "../time/getTodayFormatted";

async function getLocationData(location) {
  // https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Cesena/2025-1-12?key=QFH2HFATTUUJLRFDKPWZUE8GQ

  const key = "QFH2HFATTUUJLRFDKPWZUE8GQ";
  const day = getTodayFormatted();

  const query = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/?key=${key}`;

  let json = false;

  try {
    const data = await fetch(query, { mode: "cors" });
    json = await data.json();
  } catch (error) {
    console.error("This error got caught!", error);
  }

  return json;
}

export default getLocationData;
