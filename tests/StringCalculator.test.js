"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var StringCalculator_1 = require("../src/StringCalculator");
describe("StringCalculator", function () {
    it("Should return 0 in case of an empty string", function () {
        expect((0, StringCalculator_1.stringCalculator)("")).toBe(0);
    });
    it("Should return 0 in case of an empty string of different length", function () {
        expect((0, StringCalculator_1.stringCalculator)("                ")).toBe(0);
    });
    it("should return just 1 number in case of a single input", function () {
        expect((0, StringCalculator_1.stringCalculator)("1")).toBe(1);
        expect((0, StringCalculator_1.stringCalculator)("2")).toBe(2);
        expect((0, StringCalculator_1.stringCalculator)("3")).toBe(3);
    });
    it("should return correct sum in case of a null string passed in second input", function () {
        expect((0, StringCalculator_1.stringCalculator)("1\n ")).toBe(1);
        expect((0, StringCalculator_1.stringCalculator)("-1\n ")).toBe(-1);
        expect((0, StringCalculator_1.stringCalculator)("   \n3")).toBe(3);
    });
    it("should return sum of 2 numbers if we have 2 positive numbers in string", function () {
        expect((0, StringCalculator_1.stringCalculator)("1\n2")).toBe(3);
        expect((0, StringCalculator_1.stringCalculator)("2\n3")).toBe(5);
        expect((0, StringCalculator_1.stringCalculator)("5\n10")).toBe(15);
        expect((0, StringCalculator_1.stringCalculator)("200\n250")).toBe(450);
    });
    it("should return sum of 2 numbers if we have one positive and one negative", function () {
        expect((0, StringCalculator_1.stringCalculator)("+5\n-6")).toBe(-1);
        expect((0, StringCalculator_1.stringCalculator)("10\n-10")).toBe(0);
    });
    it("should return sum of 2 negative numbers", function () {
        expect((0, StringCalculator_1.stringCalculator)("-5\n-6")).toBe(-11);
        expect((0, StringCalculator_1.stringCalculator)("-7\n-8")).toBe(-15);
    });
    it("should be able to handle unexpected spaces", function () {
        //prettier-ignore
        expect((0, StringCalculator_1.stringCalculator)("    21 \  n    -20")).toBe("Invalid characters in input");
        //prettier-ignore
        expect((0, StringCalculator_1.stringCalculator)("   -9\   n8   ")).toBe("Invalid characters in input");
    });
    it("should return error in case of special character received", function () {
        expect((0, StringCalculator_1.stringCalculator)("1,*^$")).toBe("Invalid characters in input");
    });
    it("should return error in case of alphabet received", function () {
        expect((0, StringCalculator_1.stringCalculator)("1\none")).toBe("Invalid characters in input");
    });
    it("should return error in case of invalid syntax", function () {
        expect((0, StringCalculator_1.stringCalculator)("1\n2-")).toBe("Invalid syntax");
    });
    it("should be able to add multiple numbers (positive and negative)", function () {
        expect((0, StringCalculator_1.stringCalculator)("1\n2\n3")).toBe(6);
        expect((0, StringCalculator_1.stringCalculator)("1\n-2\n3")).toBe(2);
        expect((0, StringCalculator_1.stringCalculator)("1\n2\n-3\n-4")).toBe(-4);
        expect((0, StringCalculator_1.stringCalculator)("-1\n-2\n3\n4\n5")).toBe(9);
    });
    it("should be able to handle multiple empty strings", function () {
        expect((0, StringCalculator_1.stringCalculator)("1\n\n3")).toBe(4);
        expect((0, StringCalculator_1.stringCalculator)("\n-2\n3")).toBe(1);
        expect((0, StringCalculator_1.stringCalculator)("1\n2\n-3\n")).toBe(0);
        expect((0, StringCalculator_1.stringCalculator)("-1\n-2\n\n\n")).toBe(-3);
    });
});
