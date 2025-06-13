function toCelsius(fahrenheit) {
  const celsius = (fahrenheit - 32) / 1.8;
  return Math.round(celsius * 10) / 10;
}

export default toCelsius;
