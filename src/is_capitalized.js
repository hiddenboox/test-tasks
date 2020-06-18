const isCapitalized = (str) => {
  if (!str) {
    return false;
  }

  return /^[A-Z]/.test(str[0]);
};

export default isCapitalized;
