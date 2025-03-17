"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stringCalculator = void 0;
function hasInvalidChars(args) {
    //function checks if there are any characters except newline, whitespaces and numbers
    var InvalidPattern = /[^+0-9\s\n-]/;
    return InvalidPattern.test(args);
}
function validSyntax(args) {
    // Check if conversion to number doesn't cause an error
    return !isNaN(Number(args));
}
var stringCalculator = function (args) {
    if (args == "")
        return 0;
    if (hasInvalidChars(args)) {
        return "Invalid characters in input";
    }
    var numbers = args.split("\n"); //this will split the arguments of string , whenever a "," occurs in string
    var sum = 0;
    for (var i = 0; i < numbers.length; i++) {
        if (validSyntax(numbers[i])) {
            sum += Number(numbers[i]);
        }
        else {
            return "Invalid syntax";
        }
    }
    return sum;
};
exports.stringCalculator = stringCalculator;
