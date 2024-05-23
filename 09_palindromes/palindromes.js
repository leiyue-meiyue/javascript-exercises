const palindromes = function (string) {
  // remove punctuation
  string = string.replace(/[^\w\s\']|_/g, "");
  // all lower case
  string = string.toLowerCase();
  // remove whitespace
  string = string.replace(/\s/g, "");
  // reverse the string
  let reverse = string.split("").reverse().join("");
  // see if it is the same as the original
  // return true if so, false if not
  return reverse == string
};

// Do not edit below this line
module.exports = palindromes;
