const isCapitalized = (str) => {
  if (!str) {
    return false;
  }

  const min = "A".charCodeAt(0);
  const max = "Z".charCodeAt(0);
  const firstLetter = str.charCodeAt(0);

  return firstLetter >= min && firstLetter <= max;
};

export default isCapitalized;
