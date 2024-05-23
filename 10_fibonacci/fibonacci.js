const fibonacci = function(number) {
  if (number < 0) return "OOPS"
  if (number == 0) return 0
  let sum = 1; 
  if (number == 1 | number == 2) return sum
  // calculate the fibonacci sequence up to the number
  let num1 = 1;
  let num2 = 1;
  for (let i = 0; i < (number - 2); i++) {
    sum = num1 + num2;
    num1 = num2;
    num2 = sum;
  }

  return sum
};

// Do not edit below this line
module.exports = fibonacci;
