
const letterPositions = function (sentence) {
  const results = {};


  for (var i = 0; i < sentence.length; i++) {
    if (results[sentence[i]] === undefined) {
      results[sentence[i]] = [];

    }
    results[sentence[i]].push(i);
  }
  return results;
};


module.exports = letterPositions

