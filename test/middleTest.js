

const assert = require('chai').assert;
const middle   = require('../middle');

describe("#middle", () => {
  it("returns 3 for [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), 3);
  });

  it("returns '2.5' for ['1, 2, 3, 4, 5']", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), 2.5); 
  });

  it("returns [] for ['1, 2']", () => {
    assert.deepEqual(middle([1, 2]), []); 
  });

   it("returns [] for ['1']", () => {
    assert.deepEqual(middle([1]), []); 
  });
});








// const middle = require('../middle');

// console.log(middle([1])) // => []
// console.log(middle([1, 2]))// => []
// console.log(middle([1, 2, 3])) // => [2]
// console.log(middle([1, 2, 3, 4, 5])); // => [3]
// console.log(middle([1, 2, 3, 4])) // => [2, 3]
// console.log(middle([1, 2, 3, 4, 5, 6])) // => [3, 4]
