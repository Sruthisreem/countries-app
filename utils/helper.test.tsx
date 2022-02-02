import { mapKeysToString } from "./helper";

describe("MapKeysToString", () => {
  it("Shoud return the correct keys", () => {
    const currencies = { EUR: ["eur"], DOLLAR: ["DO"] };
    expect(mapKeysToString(currencies)).toEqual("EUR,DOLLAR");
  });
});
