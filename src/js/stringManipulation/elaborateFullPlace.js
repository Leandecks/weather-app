function elaborateFullPlace(fullPlace) {
  const split = fullPlace.split(",");
  return split.slice(1).join(", ");
}

export default elaborateFullPlace;
