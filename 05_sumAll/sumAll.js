const sumAll = function(int1,int2) {
  // create an array of numbers between int1 and 2
  let numsBetween = []; 

  // check isnum
  if (typeof int1 != "number" || typeof int2 != "number") return "ERROR"

  // check negative num
  if (int1 < 0 || int2 < 0) return "ERROR"

  // check smaller num
  let smallerNum = int1;
  let biggerNum = int2;

  if (int1 > int2) {
    smallerNum = int2;
    biggerNum = int1;
  }

  // make a loop that keeps adding prev number + 1 until it hits int2
  for (let i = smallerNum; i <= biggerNum; i++) {
    numsBetween.push(i);
  }

  // store the sum in a new variable
  let sum = 0;
  // loop through the array
  // on each loop add the number to the sum
  numsBetween.forEach(num => (sum = sum + num))
  // return the sum
  return sum
};

// Do not edit below this line
module.exports = sumAll;
