"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fizzbuzz = void 0;
var fizzbuzz = function (n) {
    return (["", "Fizz", "Buzz", "FizzBuzz"][Number(!(n % 3)) + 2 * Number(!(n % 5))] ||
        n.toString());
};
exports.fizzbuzz = fizzbuzz;
