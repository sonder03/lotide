// const assertEqual1 = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`🛑🛑🛑 Assertion Failed: ${actual} != ${expected}`);
//   }
// };

"assertEqual.js"// //FUNCTION IMPLEMENTATION
// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log("✅✅✅ Assertion Passed:" + actual + "===" + expected);

//   } else {
//     console.log("🛑🛑🛑 Assertion Failed: " + actual + "!=" + expected);
//   }
// };

// // TEST CODE
// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);
// assertEqual("Assert", "Assert");
// assertEqual("time", "year");
// assertEqual(100, 101);

// INTERPOLATION STRING
const assertEqual1 = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);  
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} != ${expected}`);
  }
};

// TEST CODE
assertEqual1("Lighthouse Labs", "Bootcamp");
assertEqual1(1, 1);
assertEqual1("Assert", "Assert");
assertEqual1("time", "year");
assertEqual1(100, 101);
