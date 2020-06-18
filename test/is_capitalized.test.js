import assert from "assert";

import isCapitalized from "../src/is_capitalized";

describe("isCapitalized", () => {
  it("should return true if provided string is capitalized", () => {
    const str = "Aest";

    "Ą".charCodeAt(0);

    const result = isCapitalized(str);

    assert.equal(result, true);
  });

  it("should return false if provided string is not capitalized", () => {
    const str = "aest";

    const result = isCapitalized(str);

    assert.equal(result, false);
  });

  it("should return false if provided arg is undefined", () => {
    const result = isCapitalized();

    assert.equal(result, false);
  });

  it("should return false if arg is not a string", () => {
    const value = 5;

    const result = isCapitalized(5);

    assert.equal(result, false);
  });
});
