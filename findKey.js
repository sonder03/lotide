const assertEqual = require('./assertEqual');

const findKey = function (object, callback) {
  const keys = Object.keys(object);
  for (const key of keys) {
    if (callback(object[key])) {
      return key;
    }
  }
  return undefined;
}

var result = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
}, x => x.stars === 2) // => "noma"

assertEqual(result,"noma");
assertEqual(result,"noanyma");

module.exports = findKey







