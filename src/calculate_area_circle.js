const calculateAreaCircle = (radius) => {
  if (!radius) {
    throw new Error("radius should be provided");
  }

  return radius * radius * Math.PI;
};

export default calculateAreaCircle;
