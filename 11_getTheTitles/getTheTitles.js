// const getTheTitles = function(array) {
//   let titles = [];
//   for (let i = 0; i < array.length; i++) {
//     titles.push(array[i].title);
//   }
//   return titles
// };

const getTheTitles = function(arr) {
  let titles = [];
  arr.map(book => (titles.push(book.title)));
  return titles
}



// Do not edit below this line
module.exports = getTheTitles;
