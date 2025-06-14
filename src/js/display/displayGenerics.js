function displayGenerics(data) {
  const container = document.querySelector("#weather");
  const city = container.querySelector("#city");
  const fullPlace = container.querySelector("#fullplace");
  const coords = container.querySelector("#coords");
  const description = container.querySelector("#description");
  const conditions = container.querySelector("#conditions");
  const cityIcon = document.querySelector("#city-icon");

  city.textContent = data.place.charAt(0).toUpperCase() + data.place.slice(1);
  cityIcon.className = "";
  cityIcon.classList.add("nf");
  cityIcon.classList.add(data.current.icon);
  fullPlace.textContent = data.fullPlace;
  coords.textContent = `${data.coordinates.latitude}, ${data.coordinates.longitude}`;
  description.textContent = data.description;

  conditions.textContent = data.current.conditions;
}

export default displayGenerics;
