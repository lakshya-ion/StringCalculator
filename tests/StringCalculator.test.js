"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var StringCalculator_1 = require("../src/StringCalculator");
describe("StringCalculator", function () {
    it("Should return 0 in case of an empty string", function () {
        expect((0, StringCalculator_1.stringCalculator)("")).toBe(0);
    });
    it("should return just 1 number in case of a single input", function () {
        expect((0, StringCalculator_1.stringCalculator)("1")).toBe(1);
        expect((0, StringCalculator_1.stringCalculator)("2")).toBe(2);
        expect((0, StringCalculator_1.stringCalculator)("3")).toBe(3);
    });
    it("should return correct sum in case of a null string passed in second input", function () {
        expect((0, StringCalculator_1.stringCalculator)("1, ")).toBe(1);
        expect((0, StringCalculator_1.stringCalculator)("-1, ")).toBe(-1);
        expect((0, StringCalculator_1.stringCalculator)("   ,3")).toBe(3);
    });
    it("should return sum of 2 numbers if we have 2 positive numbers in string", function () {
        expect((0, StringCalculator_1.stringCalculator)("1,2")).toBe(3);
        expect((0, StringCalculator_1.stringCalculator)("2,3")).toBe(5);
        expect((0, StringCalculator_1.stringCalculator)("5,10")).toBe(15);
        expect((0, StringCalculator_1.stringCalculator)("200,250")).toBe(450);
    });
    //handling edge cases in case of 2 inputs
    it("should return sum of 2 numbers if we have one positive and one negative", function () {
        expect((0, StringCalculator_1.stringCalculator)("+5,-6")).toBe(-1);
        expect((0, StringCalculator_1.stringCalculator)("10,-10")).toBe(0);
    });
    it("should return sum of 2 negative numbers", function () {
        expect((0, StringCalculator_1.stringCalculator)("-5,-6")).toBe(-11);
        expect((0, StringCalculator_1.stringCalculator)("-7,-8")).toBe(-15);
    });
    it("should be able to handle unexpected spaces", function () {
        expect((0, StringCalculator_1.stringCalculator)("    21 ,    -20")).toBe(1);
        expect((0, StringCalculator_1.stringCalculator)("   -9,8   ")).toBe(-1);
    });
    //edge cases
    it("should return error in case of special character received", function () {
        expect((0, StringCalculator_1.stringCalculator)("1,*^$")).toBe("Invalid characters in input");
    });
    it("should return error in case of alphabet received", function () {
        expect((0, StringCalculator_1.stringCalculator)("1,one")).toBe("Invalid characters in input");
    });
    it("should return error in case of invalid syntax", function () {
        expect((0, StringCalculator_1.stringCalculator)("1,2-")).toBe("Invalid syntax");
    });
    it("should return error in case of multiple commas", function () {
        expect((0, StringCalculator_1.stringCalculator)("1,,2")).toBe("Invalid syntax");
    });
});
