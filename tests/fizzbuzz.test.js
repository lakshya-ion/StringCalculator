"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fizzbuzz_1 = require("../src/fizzbuzz");
describe("fizzbuzz", function () {
    //the easiest one first
    it("number as a string if no condition is met", function () {
        expect((0, fizzbuzz_1.fizzbuzz)(1)).toBe("1");
        expect((0, fizzbuzz_1.fizzbuzz)(7)).toBe("7");
    });
    it("should return Fizz on number divisible by 3", function () {
        //should be just divisible by 3 and not 5
        //0 is also exempted
        var testArr = [3, 6, 9, 12];
        testArr.forEach(function (num) {
            expect((0, fizzbuzz_1.fizzbuzz)(num)).toBe("Fizz");
        });
    });
    it("should return Buzz on number divisible by 5", function () {
        //number should just be divisible by 5 and not 3
        var testArr = [5, 10, 20];
        testArr.forEach(function (num) {
            expect((0, fizzbuzz_1.fizzbuzz)(num)).toBe("Buzz");
        });
    });
    it("should return fizzbuzz on number divisible by 3 and 5", function () {
        var testArr = [15, 30, 45];
        testArr.forEach(function (num) {
            expect((0, fizzbuzz_1.fizzbuzz)(num)).toBe("FizzBuzz");
        });
    });
    it("should return correct value on receiving negative values", function () {
        expect((0, fizzbuzz_1.fizzbuzz)(-9)).toBe("Fizz");
        expect((0, fizzbuzz_1.fizzbuzz)(-2)).toBe("-2");
        expect((0, fizzbuzz_1.fizzbuzz)(-15)).toBe("FizzBuzz");
    });
});
