const eqArray = require('./eqArray');

const assertArraysEqual = function (array1, array2) {
  let v = eqArray(array1, array2);
  if (v === true) {
    console.log("Arrays are equal")
  }
  else {
    console.log("arrays are not equal")
  }
};


module.exports = assertArraysEqual