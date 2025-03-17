export const fizzbuzz = (n: number): string => {
  return (
    ["", "Fizz", "Buzz", "FizzBuzz"][Number(!(n % 3)) + 2 * Number(!(n % 5))] ||
    n.toString()
  );
};
