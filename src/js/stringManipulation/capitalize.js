function capitalize(string) {
  const strings = string.split(" ");

  for (let i = 0; i < strings.length; i++) {
    strings[i] = strings[i].charAt(0).toUpperCase() + strings[i].slice(1);
  }

  return strings.join(" ");
}

export default capitalize;
