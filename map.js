const words = ["ground", "control", "to", "major", "tom"];

const map = function (array, callback) {

  const results = [];
  for (let item of array) {
    console.log('item BEFORE: ', item);
    console.log('item AFTER: ', callback(item));
    console.log('---');
    results.push(callback(item));
  }
  return results;
}

//const results1 = map(words, word => word[0]);
//console.log(results1);

// const xxx=  function(word)
// {
// return word[0];
// }
// const results2 = map(words,xxx);


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

assertArraysEqual(map(["sun", "light", "stars"], x => x[2]), ['n', 'g', 'a']);
assertArraysEqual(map(["sun", "light", "stars"], x => x[0]), ['s', 'g', 'a']);
assertArraysEqual(map(["sun", "light", "stars"], x => x[0] + x[0] ), ['ss', 'll', 'ss']);

assertArraysEqual(map(["12", "34", "567"], x => x[0] + x[1] ), ['12', '34', '57']);

