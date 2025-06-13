function msToKmh(ms) {
  const kmh = ms * 3.6;
  return Math.round(kmh * 100) / 100;
}

export default msToKmh;
