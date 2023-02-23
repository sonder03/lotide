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



module.exports = eqArrays;

