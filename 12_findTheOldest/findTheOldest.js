const findTheOldest = function(array) {
  let ages = [];
  // loop through the array
  for (let i = 0; i < array.length; i++) {
    // calculate the age
    let birth = array[i].yearOfBirth;
    let death = array[i].yearOfDeath;
    // deal with not dead people
    if (typeof death != "number") {
      death = new Date().getFullYear();
    } 
    let age = death - birth;
    
    // put that in an array probably
    ages.push(age);
  }

  // find the index of the highest number?
  let indexOfHighest = ages.reduce((maxIndex, elem, i, ages) =>  
  elem > ages[maxIndex] ? i : maxIndex, 0);                      //figure this out later
  
  // get the person at that index
  return array[indexOfHighest]
};

// Do not edit below this line
module.exports = findTheOldest;
