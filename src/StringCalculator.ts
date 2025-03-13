function hasInvalidChars(args: string): boolean {
  //function checks if there are any characters except comma, whitespaces and numbers
  const InvalidPattern = /[^+0-9\s,-]/;
  return InvalidPattern.test(args);
}
function validSyntax(args: string): boolean {
  // Check if conversion to number doesn't cause an error
  if (!isNaN(Number(args))) {
    return true;
  }
  return false;
}

export const stringCalculator = (args: string) => {
  if (args == "") return 0;
  if (hasInvalidChars(args)) {
    return "Invalid characters in input";
  }

  let numbers = args.split(","); //this will split the arguments of string , whenever a "," occurs in string
  if (numbers.length == 1) {
    if (validSyntax(numbers[0])) {
      return Number(numbers[0]);
    } else {
      return "Invalid syntax";
    }
  }
  if (numbers.length == 2) {
    if (validSyntax(numbers[0]) && validSyntax(numbers[1])) {
      let num1 = Number(numbers[0]);
      let num2 = Number(numbers[1]);
      return num1 + num2;
    } else {
      return "Invalid syntax";
    }
  }
  return "please enter at max 2 inputs";
};
