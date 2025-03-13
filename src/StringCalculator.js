"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stringCalculator = void 0;
function hasInvalidChars(args) {
    //function checks if there are any characters except comma, whitespaces and numbers
    var InvalidPattern = /[^+0-9\s,-]/;
    return InvalidPattern.test(args);
}
function validSyntax(args) {
    // Check if conversion to number doesn't cause an error
    if (!isNaN(Number(args))) {
        return true;
    }
    return false;
}
var stringCalculator = function (args) {
    if (args == "")
        return 0;
    if (hasInvalidChars(args)) {
        return "Invalid characters in input";
    }
    var numbers = args.split(","); //this will split the arguments of string , whenever a "," occurs in string
    if (numbers.length == 1) {
        if (validSyntax(numbers[0])) {
            return Number(numbers[0]);
        }
        else {
            return "Invalid syntax";
        }
    }
    if (numbers.length == 2) {
        if (validSyntax(numbers[0]) && validSyntax(numbers[1])) {
            var num1 = Number(numbers[0]);
            var num2 = Number(numbers[1]);
            return num1 + num2;
        }
        else {
            return "Invalid syntax";
        }
    }
    return "please enter at max 2 inputs";
};
exports.stringCalculator = stringCalculator;
