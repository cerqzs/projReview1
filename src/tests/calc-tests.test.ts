//testar negativos, positivos, zeros,vazio

import { sumOfArray } from "../calc";

describe("Cálculo da soma de elementos de um Array", () => {
  test("[0, 0, 0] should return 0", () => {
    expect(sumOfArray([0, 0, 0])).toBe(0);
  });

  test("[1, 1, 1] should return 3", () => {
    expect(sumOfArray([1, 1, 1])).toBe(3);
  });

  test("[-1, 0, 1] should return 0", () => {
    expect(sumOfArray([-1, 0, 1])).toBe(0);
  });

  test("[-1, 1, 1] should return 1", () => {
    expect(sumOfArray([-1, 1, 1])).toBe(1);
  });

  test("[] should return 0", () => {
    expect(sumOfArray([])).toBe(0);
  });
});
