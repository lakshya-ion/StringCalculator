import { fizzbuzz } from "../src/fizzbuzz";

describe("fizzbuzz", () => {
  //the easiest one first
  it("number as a string if no condition is met", () => {
    expect(fizzbuzz(1)).toBe("1");
    expect(fizzbuzz(7)).toBe("7");
  });

  it("should return Fizz on number divisible by 3", () => {
    //should be just divisible by 3 and not 5
    //0 is also exempted
    let testArr = [3, 6, 9, 12];

    testArr.forEach((num) => {
      expect(fizzbuzz(num)).toBe("Fizz");
    });
  });

  it("should return Buzz on number divisible by 5", () => {
    //number should just be divisible by 5 and not 3
    let testArr = [5, 10, 20];
    testArr.forEach((num) => {
      expect(fizzbuzz(num)).toBe("Buzz");
    });
  });

  it("should return fizzbuzz on number divisible by 3 and 5", () => {
    let testArr = [15, 30, 45];
    testArr.forEach((num) => {
      expect(fizzbuzz(num)).toBe("FizzBuzz");
    });
  });

  it("should return correct value on receiving negative values", () => {
    expect(fizzbuzz(-9)).toBe("Fizz");
    expect(fizzbuzz(-2)).toBe("-2");
    expect(fizzbuzz(-15)).toBe("FizzBuzz");
  });
});
