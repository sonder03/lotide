const eqArrays  = function([a1], [a2]) {
  if (a1 === a2) {
    console.log(`✅✅✅ Assertion Passed: ${a1} === ${a2}`);  
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${a1} != ${a2}`);
  }
};

eqArrays([1, 2, 3], [1, 2, 3]) // => true
eqArrays([1, 2, 3], [3, 2, 1]) // => false

eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false
