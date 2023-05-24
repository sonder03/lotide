const assertEqual = require('./assertEqual');

const countOnly = function (allItems, itemsToCount) {
  const results = {};
  for (const item of allItems) {
    if (itemsToCount[item] === true) {
      results[item] = 0;
    }
  }
  for (const item of allItems) {
    if (itemsToCount[item] === true) {
      results[item] = results[item] + 1;
    }
  }
  return results;
}


module.exports = countOnly