const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} != ${expected}`);
  }
};

const eqArrays = function (a1, a2) {

  for (i = 0; i < a1.length; i++) {

    if (a1[i] !== a2[i]) {
      return false;
    }
  }
  return true
};

const assertArraysEqual = function (array1, array2) {
  var v = eqArrays(array1, array2);
  if (v === true) {
    console.log("Arrays are equal")
  }
  else {
    console.log("arrays are not equal")
  }
}

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