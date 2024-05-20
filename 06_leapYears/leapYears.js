const leapYears = function(year) {
  let cond = false;

  // check if divisible by 4
  if (year % 4 == 0) cond = true;
  // if divisible by 100, check if divisible by 400
  if (year % 100 == 0) {
    cond = false
    if (year % 400 == 0) cond = true;
  }

  return cond
};

// Do not edit below this line
module.exports = leapYears;
