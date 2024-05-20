const convertToCelsius = function(x) {
  let result = ((x - 32) * 5/9);
  result = Math.round(result * 10) / 10;
  result = parseFloat(result.toFixed(1));
  return result
};

const convertToFahrenheit = function(x) {
  let result = (x * 9/5 + 32);
  result = Math.round(result * 10) / 10;
  result = parseFloat(result.toFixed(1));
  return result
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
