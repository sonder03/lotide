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
    console.log("arrays are not equal") }
} 




module.exports = assertArraysEqual