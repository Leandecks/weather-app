function toEuropeanTimeFormat(time) {
  // yyyy-mm-dd to dd/mm/yyyy
  const split = time.split("-");
  return `${split[2]}/${split[1]}/${split[0]}`;
}

export default toEuropeanTimeFormat;
