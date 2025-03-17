function hasInvalidChars(args: string): boolean {
  //function checks if there are any characters except newline, whitespaces and numbers
  const InvalidPattern = /[^+0-9\s\n-]/;
  return InvalidPattern.test(args);
}
function validSyntax(args: string): boolean {
  // Check if conversion to number doesn't cause an error
  return !isNaN(Number(args));
}

export const stringCalculator = (args: string) => {
  if (args == "") return 0;
  if (hasInvalidChars(args)) {
    return "Invalid characters in input";
  }

  let numbers = args.split("\n"); //this will split the arguments of string , whenever a "," occurs in string

  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (validSyntax(numbers[i])) {
      sum += Number(numbers[i]);
    } else {
      return "Invalid syntax";
    }
  }
  return sum;
};
