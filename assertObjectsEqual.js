const eqArray = require('./eqArray');

const eqObjects = require('./eqObjects');

const assertObjectsEqual = function (actual, expected) {
  // Implement me!

  const inspect = require('util').inspect;

  let v = eqObjects(actual, expected);

  if (v === true) {
    console.log("✅✅✅ Assertion Passed: " + inspect(actual) + " === " + inspect(expected))
  }
  else {
    console.log("🛑🛑🛑 Assertion Filed: " + inspect(actual) + " !== " + inspect(expected))
  }
};


assertObjectsEqual({ color: "red", size: "medium" }, { color: "red", size: "medium" });


module.exports = assertObjectsEqual