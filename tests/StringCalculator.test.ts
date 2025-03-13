import { stringCalculator } from "../src/StringCalculator";

describe("StringCalculator", () => {
  it("Should return 0 in case of an empty string", () => {
    expect(stringCalculator("")).toBe(0);
  });
  // it("Should return enter 2 inputs in case of more than 2 inputs", () => {
  //   expect(stringCalculator("1,2,3")).toBe("please enter at max 2 inputs");
  // });
  it("should return just 1 number in case of a single input", () => {
    expect(stringCalculator("1")).toBe(1);
    expect(stringCalculator("2")).toBe(2);
    expect(stringCalculator("3")).toBe(3);
  });
  it("should return correct sum in case of a null string passed in second input", () => {
    expect(stringCalculator("1, ")).toBe(1);
    expect(stringCalculator("-1, ")).toBe(-1);
    expect(stringCalculator("   ,3")).toBe(3);
  });
  it("should return sum of 2 numbers if we have 2 positive numbers in string", () => {
    expect(stringCalculator("1,2")).toBe(3);
    expect(stringCalculator("2,3")).toBe(5);
    expect(stringCalculator("5,10")).toBe(15);
    expect(stringCalculator("200,250")).toBe(450);
  });
  //handling edge cases in case of 2 inputs
  it("should return sum of 2 numbers if we have one positive and one negative", () => {
    expect(stringCalculator("+5,-6")).toBe(-1);
    expect(stringCalculator("10,-10")).toBe(0);
  });

  it("should return sum of 2 negative numbers", () => {
    expect(stringCalculator("-5,-6")).toBe(-11);
    expect(stringCalculator("-7,-8")).toBe(-15);
  });

  it("should be able to handle unexpected spaces", () => {
    expect(stringCalculator("    21 ,    -20")).toBe(1);
    expect(stringCalculator("   -9,8   ")).toBe(-1);
  });

  //edge cases
  it("should return error in case of special character received", () => {
    expect(stringCalculator("1,*^$")).toBe("Invalid characters in input");
  });
  it("should return error in case of alphabet received", () => {
    expect(stringCalculator("1,one")).toBe("Invalid characters in input");
  });
  it("should return error in case of invalid syntax", () => {
    expect(stringCalculator("1,2-")).toBe("Invalid syntax");
  });
  //adding support for multiple inputs
  it("should be able to add multiple numbers (positive and negative)", () => {
    expect(stringCalculator("1,2,3")).toBe(6);
    expect(stringCalculator("1,-2,3")).toBe(2);
    expect(stringCalculator("1,2,-3,-4")).toBe(-4);
    expect(stringCalculator("-1,-2,3,4,5")).toBe(9);
  });
  it("should be able to handle multiple empty strings", () => {
    expect(stringCalculator("1,,3")).toBe(4);
    expect(stringCalculator(",-2,3")).toBe(1);
    expect(stringCalculator("1,2,-3,")).toBe(0);
    expect(stringCalculator("-1,-2,,,")).toBe(-3);
  });
});
