import { stringCalculator } from "../src/StringCalculator";

describe("StringCalculator", () => {
  it("Should return 0 in case of an empty string", () => {
    expect(stringCalculator("")).toBe(0);
  });

  it("Should return 0 in case of an empty string of different length", () => {
    expect(stringCalculator("                ")).toBe(0);
  });

  it("should return just 1 number in case of a single input", () => {
    expect(stringCalculator("1")).toBe(1);
    expect(stringCalculator("2")).toBe(2);
    expect(stringCalculator("3")).toBe(3);
  });

  it("should return correct sum in case of a null string passed in second input", () => {
    expect(stringCalculator("1\n ")).toBe(1);
    expect(stringCalculator("-1\n ")).toBe(-1);
    expect(stringCalculator("   \n3")).toBe(3);
  });

  it("should return sum of 2 numbers if we have 2 positive numbers in string", () => {
    expect(stringCalculator("1\n2")).toBe(3);
    expect(stringCalculator("2\n3")).toBe(5);
    expect(stringCalculator("5\n10")).toBe(15);
    expect(stringCalculator("200\n250")).toBe(450);
  });

  it("should return sum of 2 numbers if we have one positive and one negative", () => {
    expect(stringCalculator("+5\n-6")).toBe(-1);
    expect(stringCalculator("10\n-10")).toBe(0);
  });

  it("should return sum of 2 negative numbers", () => {
    expect(stringCalculator("-5\n-6")).toBe(-11);
    expect(stringCalculator("-7\n-8")).toBe(-15);
  });

  it("should be able to handle unexpected spaces", () => {
    //prettier-ignore
    expect(stringCalculator("    21 \  n    -20")).toBe("Invalid characters in input");
    //prettier-ignore
    expect(stringCalculator("   -9\   n8   ")).toBe("Invalid characters in input");
  });

  it("should return error in case of special character received", () => {
    expect(stringCalculator("1,*^$")).toBe("Invalid characters in input");
  });

  it("should return error in case of alphabet received", () => {
    expect(stringCalculator("1\none")).toBe("Invalid characters in input");
  });

  it("should return error in case of invalid syntax", () => {
    expect(stringCalculator("1\n2-")).toBe("Invalid syntax");
  });

  it("should be able to add multiple numbers (positive and negative)", () => {
    expect(stringCalculator("1\n2\n3")).toBe(6);
    expect(stringCalculator("1\n-2\n3")).toBe(2);
    expect(stringCalculator("1\n2\n-3\n-4")).toBe(-4);
    expect(stringCalculator("-1\n-2\n3\n4\n5")).toBe(9);
  });

  it("should be able to handle multiple empty strings", () => {
    expect(stringCalculator("1\n\n3")).toBe(4);
    expect(stringCalculator("\n-2\n3")).toBe(1);
    expect(stringCalculator("1\n2\n-3\n")).toBe(0);
    expect(stringCalculator("-1\n-2\n\n\n")).toBe(-3);
  });
});
