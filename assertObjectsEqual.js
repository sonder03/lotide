const eqArrays = function (a1, a2) {
  for (i = 0; i < a1.length; i++) {
    if (a1[i] !== a2[i]) {
      return false;
    }
  }
  return true
};


const eqObjects = function (object1, object2) {
  var result = false;
  var keysObj1 = Object.keys(object1);
  var keysObj2 = Object.keys(object2);
  if (keysObj1.length != keysObj2.length) {
    result = false;
  }
  else {
    for (var i = 0; i < keysObj1.length; i++) {
      var key = keysObj1[i];
      var value1 = object1[key];
      var value2 = object2[key];

      if (Array.isArray(value1) && Array.isArray(value2)) {
        if (eqArrays(value1, value2) === true) {
          result = true;
        }
        else {
          result = false;
          break;
        }
      }
      else if (value1 === value2) {
        result = true
      }
      else {
        result = false;
        break;
      }
    }
  }
  return result;
};

const assertObjectsEqual = function (actual, expected) {
  // Implement me!

  const inspect = require('util').inspect;

  var v = eqObjects(actual, expected);

  if (v === true) {
    console.log("✅✅✅ Assertion Passed: " + inspect(actual) + " === " + inspect(expected))
  }
  else {
    console.log("🛑🛑🛑 Assertion Filed: " + inspect(actual) + " !== " + inspect(expected))
  }
};


assertObjectsEqual({ color: "red", size: "medium" }, { color: "red", size: "medium" });