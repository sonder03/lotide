const assertArraysEqual = require('./assertArraysEqual');

const letterPositions = function (sentence) {
  const results = {};
  // logic to update results here

  for (var i = 0; i < sentence.length; i++) {
    if (results[sentence[i]] === undefined) {
      results[sentence[i]] = [];

    }
    results[sentence[i]].push(i);
  }
  return results;
};

assertArraysEqual(letterPositions("hello").e, [1]);

console.log(letterPositions("lighthouse in the house"))


module.exports = letterPositions


// {
//   l: [0],
//   i: [1, 11],
//   g: [2],
//   h: [3, 5, 15, 18],
//   t: [4, 14],
//   o: [6, 19],
//   u: [7, 20],
//   s: [8, 21],
//   e: [9, 16, 22],
//   n: [12]
// }