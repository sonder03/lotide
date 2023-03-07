const assertEquals = require('./assertEqual');



// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!

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

      // console.log(key);
      // console.log(value1);
      // console.log(value2);

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

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
assertEquals(eqObjects(shirtObject, anotherShirtObject), true);
//We need to use that return value in combination with assertEquals to test if the function is working correctly.



const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
assertEquals(eqObjects(shirtObject, longSleeveShirtObject), false);




const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
eqObjects(multiColorShirtObject, anotherMultiColorShirtObject); // => true

const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject); // => false


module.exports = eqObjects