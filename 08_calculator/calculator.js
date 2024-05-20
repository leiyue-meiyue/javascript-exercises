const add = function(x, y) {
	return x + y
};

const subtract = function(x, y) {
	return x - y
};

const sum = function(array) {
	let result = 0;
  array.forEach(num => result += num);
  return result
};

const multiply = function(array) {
  let result = 1;
  array.forEach(num => result *= num);
  return result
};

const power = function(x, y) {
	return x ** y
};

const factorial = function(x) {
  let result = x;
  if (x == 0) return 1

	for (let i = 1; i < x; i++) {
    result *= (x - i)
  }
  return result
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
