const assertEqual1 = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} != ${expected}`);
  }
};

// // TEST CODE
// assertEqual1("Lighthouse Labs", "Bootcamp");
// assertEqual1(1, 1);
// assertEqual1("Assert", "Assert");
// assertEqual1("time", "year");
// assertEqual1(100, 101);

const eqArrays = function (a1, a2) {
  for (i = 0; i < a1.length; i++) {
    if (a1[i] !== a2[i]) {
     return false;
    }
  }
  return true
};

console.log(eqArrays([1, 2, 3], [1, 2, 3])) // => true
// console.log(eqArrays([1, 2, 3], [3, 2, 1])) // => false

// console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])) // => true
// console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])) // => false

console.log(assertEqual1(eqArrays([1, 2, 3], [1, 2, 3]), true)); // => should PASS
