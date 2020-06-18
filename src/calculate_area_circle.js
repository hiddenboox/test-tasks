const calculateAreaCircle = (radius) => {
  if (!radius) {
    throw new Error("radius should be provided");
  }

  const rad = parseFloat(radius);

  if (isNaN(rad)) {
    throw new Error("radius should be a number");
  }

  return rad * rad * Math.PI;
};

export default calculateAreaCircle;
