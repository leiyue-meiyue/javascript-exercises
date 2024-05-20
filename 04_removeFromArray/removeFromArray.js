const removeFromArray = function(array, ...args) {
  return array.filter(arg => !args.includes(arg)) // takes arg and doesn't keep
};                                                // it in the new array

// Do not edit below this line
module.exports = removeFromArray;
