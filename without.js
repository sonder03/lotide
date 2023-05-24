

const without = function (source, itemsToRemove) {
  var newarray = []

  for (let i = 0; i < source.length; i++) {

    var itemFound = false;

    for (let j = 0; j < itemsToRemove.length; j++) {

      if (source[i] === itemsToRemove[j]) {
        itemFound = true;
      }
    }

    if (itemFound == false) {
      newarray.push(source[i]);
    }
  }
  return newarray;
}

module.exports = without




