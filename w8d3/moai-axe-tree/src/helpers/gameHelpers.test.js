// - pickOppositeChoice

import { pickOppositeChoice, pickRandomChoice } from "./gameHelpers";

// - pickRandomChoice
// - compareResults

describe("pickOppositeChoice functionality", () => {
  // Input would be different from [🗿,🪓,🌳], check for type also
  // Input is not there at all
  // If input is good, then we should return the proper value

  it("should throw an error if there is no input", () => {
    const throwyFunction = () => pickOppositeChoice();

    expect(throwyFunction).toThrow("HEY CHOOSE SOMETHING");
  });

  it("should throw an error if the input is invalid", () => {
    const throwyFunction = () => pickOppositeChoice("🐔");

    expect(throwyFunction).toThrow("THAT AINT A GOOD INPUT");
  });

  it("should return the proper value if given a valid input", () => {
    const choices = ["🗿", "🌳", "🪓"];

    const pairings = {
      "🗿": "🌳",
      "🌳": "🪓",
      "🪓": "🗿",
    };

    for (const choice of choices) {
      const result = pickOppositeChoice(choice);
      const expectedResult = pairings[choice];

      expect(result).toBe(expectedResult);
    }
  });
});

describe("pickRandomChoice functionality", () => {
  it("should throw an error if there is no seed", () => {
    const throwyFunction = () => pickRandomChoice();

    expect(throwyFunction).toThrow("DON'T FORGET THE SEED!");
  });
  it("should throw an error if the seed is invalid", () => {
    const throwyFunction = () => pickRandomChoice("🥔");

    expect(throwyFunction).toThrow("WHAT KIND OF SEED IS THIS");
  });
  it("output valid choices if given a seed", () => {
    const choices = ["🗿", "🌳", "🪓"];

    const result1 = pickRandomChoice(1);
    const expectedResult1 = "🌳";

    const result2 = pickRandomChoice(2);
    const expectedResult2 = "🪓";

    const result3 = pickRandomChoice(3);
    const expectedResult3 = "🗿";

    expect(result1).toBe(expectedResult1);
    expect(result2).toBe(expectedResult2);
    expect(result3).toBe(expectedResult3);
  });
});

describe("compareResults functionality", () => {
  xit("", () => {
    // ...
  });
});
