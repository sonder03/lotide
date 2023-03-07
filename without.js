const assertArraysEqual = require('./assertArraysEqual');

// assertArraysEqual([7, 9, 9], [8, 8, 8])
// assertArraysEqual([7, 9, 9], [7, 9, 9])
// assertArraysEqual([7, 9, 8], [7, 9, 8])

const without = function (source, itemsToRemove) {
  var newarray = []

  for (let i = 0; i < source.length; i++) {

    var itemFound = false;

    for (let j = 0; j < itemsToRemove.length; j++) {

      if (source[i] === itemsToRemove[j]) {
        itemFound = true;
      }
    }

    if (itemFound == false) {
      newarray.push(source[i]);
    }
  }
  return newarray;
}

console.log(without([1, 4, 6], [4, 7]))


module.exports = without




