import assert from "assert";

import isCapitalized from "../src/is_capitalized";

describe("isCapitalized", () => {
  it("should return true if provided string is capitalized", () => {
    const str = "Test";

    const result = isCapitalized(str);

    assert.equal(result, true);
  });

  it("should return false if provided string is not capitalized", () => {
    const str = "test";

    const result = isCapitalized(str);

    assert.equal(result, false);
  });

  it("should return false if provided arg is undefined", () => {
    const result = isCapitalized();

    assert.equal(result, false);
  });
});
