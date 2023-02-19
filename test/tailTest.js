const assert = require('chai').assert;
const tail   = require('../tail');

describe("#tail", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.deepEqual(tail([1, 2, 3]), [2, 3]);
  });

  it("returns '6, 7' for [5, 6, 7]", () => {
    assert.deepEqual(tail([5,6,7]), [6,7]); 
  });


});




// const assertEqual = require('../assertEqual');
// const tail = require('../tail');

// //TEST CODE
// assertEqual(tail([5,6,7]), [6,7]);
// assertEqual(tail(["Hello", "Lighthouse", "Labs"]), "Hello");
// assertEqual(tail(["Hello", "Lighthouse", "Labs"]), "Helloddd");