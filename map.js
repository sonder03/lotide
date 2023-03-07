const assertArraysEqual = require('./assertArraysEqual');

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

assertArraysEqual(map(["sun", "light", "stars"], x => x[2]), ['n', 'g', 'a']);
assertArraysEqual(map(["sun", "light", "stars"], x => x[0]), ['s', 'g', 'a']);
assertArraysEqual(map(["sun", "light", "stars"], x => x[0] + x[0] ), ['ss', 'll', 'ss']);

assertArraysEqual(map(["12", "34", "567"], x => x[0] + x[1] ), ['12', '34', '57']);


module.exports = map

