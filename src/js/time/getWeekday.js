function getWeekday(day) {
  // 0 today, 1 tomorrow etc.
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  let index = new Date().getDay() - 1 + day;

  if (index > 6) {
    index = index % 7;
  }

  return days[index];
}

export default getWeekday;
