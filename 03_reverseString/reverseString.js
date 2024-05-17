const reverseString = function(string) {

  let result = '';

  let i = 0;
  let letter = '';
  let strLen = string.length;

  while (i < strLen) {
    letter = string.slice(-1);
    result += letter;
    string = string.slice(0, -1);
    i++;
  }

  return result;
};

// Do not edit below this line
module.exports = reverseString;
