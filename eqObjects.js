
const eqObjects = function (object1, object2) {

  let result = false;

  let keysObj1 = Object.keys(object1);
  let keysObj2 = Object.keys(object2);

  if (keysObj1.length != keysObj2.length) {
    result = false;
  }
  else {

    for (let i = 0; i < keysObj1.length; i++) {
      let key = keysObj1[i];
      let value1 = object1[key];
      let value2 = object2[key];


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


module.exports = eqObjects