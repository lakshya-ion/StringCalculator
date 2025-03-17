"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fizzbuzz = void 0;
var fizzbuzz = function (n) {
    if (n % 15 == 0)
        return "FizzBuzz"; //used modulo 15, because any number divisible by 3 and 5 will be divisible by 15, as LCM(3,5) = 15
    if (n % 3 == 0)
        return "Fizz";
    if (n % 5 == 0)
        return "Buzz";
    return n.toString();
};
exports.fizzbuzz = fizzbuzz;
