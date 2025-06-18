import removeSeconds from "../time/removeSeconds";
import toCelsius from "../conversion/fahrenheitCelsius";
import msToKmh from "../conversion/msToKmh";
import nullToNumber from "../nullSafety/nullToNumber";
import nullToString from "../nullSafety/nullToString";
import conditionsToIcon from "../stringManipulation/conditionsToIcon";

function processLocationData(json) {
  return {
    place: json.address,
    fullPlace: json.resolvedAddress,
    description: json.description,
    alerts: json.alerts.map((alert) => ({
      event: alert.headline,
    })),
    coordinates: {
      latitude: json.latitude,
      longitude: json.longitude,
    },
    current: {
      conditions: json.currentConditions.conditions,
      icon: conditionsToIcon(json.currentConditions.conditions),
      time: removeSeconds(json.currentConditions.datetime),
      temperature: toCelsius(json.currentConditions.temp), // °F
      feelsLike: toCelsius(json.currentConditions.feelslike), // °F
      dew: toCelsius(json.currentConditions.dew), // Taupunkt °F
      humidity: json.currentConditions.humidity, // in %
      precipitation: {
        fall: json.currentConditions.precip, // Niederschlag
        probability: json.currentConditions.precipprob, // % Niederschlag
        type: nullToString(json.currentConditions.preciptype),
      },
      pressure: json.currentConditions.pressure, // mb, hPa
      snow: {
        fall: json.currentConditions.snow,
        depth: json.currentConditions.snowdepth,
      },
      sunrise: removeSeconds(json.currentConditions.sunrise),
      sunset: removeSeconds(json.currentConditions.sunset),
      wind: {
        direction: json.currentConditions.winddir,
        speed: json.currentConditions.windspeed,
        speedKmh: msToKmh(json.currentConditions.windspeed),
        currentSpeed: nullToNumber(json.currentConditions.windgust),
        currentSpeedKmh: msToKmh(json.currentConditions.windgust),
      },
      solarEnergy: json.currentConditions.solarenergy,
      visibility: json.currentConditions.visibility,
    },
    future: [
      {
        conditions: json.days[0].conditions,
        icon: conditionsToIcon(json.days[0].conditions),
        temperature: toCelsius(json.days[0].temp),
        minTemperature: toCelsius(json.days[0].tempmin),
        maxTemperature: toCelsius(json.days[0].tempmax),
        rainChance: json.days[0].precipprob,
      },
      {
        conditions: json.days[1].conditions,
        icon: conditionsToIcon(json.days[1].conditions),
        temperature: toCelsius(json.days[1].temp),
        minTemperature: toCelsius(json.days[1].tempmin),
        maxTemperature: toCelsius(json.days[1].tempmax),
        rainChance: json.days[1].precipprob,
      },
      {
        conditions: json.days[2].conditions,
        icon: conditionsToIcon(json.days[2].conditions),
        temperature: toCelsius(json.days[2].temp),
        minTemperature: toCelsius(json.days[2].tempmin),
        maxTemperature: toCelsius(json.days[2].tempmax),
        rainChance: json.days[2].precipprob,
      },
      {
        conditions: json.days[3].conditions,
        icon: conditionsToIcon(json.days[3].conditions),
        temperature: toCelsius(json.days[3].temp),
        minTemperature: toCelsius(json.days[3].tempmin),
        maxTemperature: toCelsius(json.days[3].tempmax),
        rainChance: json.days[3].precipprob,
      },
    ],
  };
}

export default processLocationData;
