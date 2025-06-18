function conditionsToIcon(conditions) {
  conditions = conditions.toLowerCase();
  if (conditions.includes("snow")) {
    return "nf-weather-snow";
  } else if (conditions.includes("rain")) {
    return "nf-weather-rain";
  } else if (conditions.includes("cloud") || conditions.includes("overcast")) {
    return "nf-weather-cloudy";
  } else {
    return "nf-weather-day_sunny";
  }
}

export default conditionsToIcon;
