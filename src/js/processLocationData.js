import formatIsoTime from "./time/formatIsoTime";

/*
### Features

- Weather now
- Forecast for 2 weeks

Including:
- Temperature
- Rain, Snow...
- Sunrise and set
 */

function processLocationData(json) {
  return {
    place: json.address,
    fullPlace: json.resolvedAddress,
    description: json.description,
    timezone: json.timezone,
    alerts: json.alerts.map((alert) => ({
      event: alert.headline,
      description: alert.description,
      end: formatIsoTime(alert.ends),
    })),
  };
}

export default processLocationData;
