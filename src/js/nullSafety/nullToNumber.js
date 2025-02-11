function nullToNumber(potentialNull) {
  if (potentialNull == null) {
    return 0;
  } else {
    return potentialNull;
  }
}

export default nullToNumber;
