function displayAlerts(data) {
  const container = document.querySelector("#weather");
  const alerts = container.querySelector("#alerts");

  alerts.textContent = "";

  if (data.alerts.length === 0) {
    const alert = document.createElement("p");
    alert.textContent = "There are no alerts.";
    alerts.appendChild(alert);
  } else {
    for (let i = 0; i < data.alerts.length; i++) {
      const alert = document.createElement("p");
      alert.textContent = data.alerts[i].event;
      alerts.appendChild(alert);
    }
  }
}

export default displayAlerts;
