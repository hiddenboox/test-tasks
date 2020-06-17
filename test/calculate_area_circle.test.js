import assert from "assert";

import calculateAreaCircle from "../src/calculate_area_circle";

describe("calculateAreaCircle", () => {
  var cases = [
    { arg: 5, expected: 5 * 5 * Math.PI },
    { arg: 3.2, expected: 3.2 * 3.2 * Math.PI },
    { arg: 2, expected: 2 * 2 * Math.PI },
  ];

  cases.forEach((test) => {
    it(`correctly calculate area of circle for radius ${test.arg}`, () => {
      const result = calculateAreaCircle(test.arg);

      assert.equal(result, test.expected);
    });
  });

  it("should return valid result of provided radius", () => {
    const radius = 5;

    const result = calculateAreaCircle(radius);

    assert.equal(result, radius * radius * Math.PI);
  });

  it("should throw on missing radius", () => {
    assert.throws(() => calculateAreaCircle());
  });
});
