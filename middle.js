
const middle = function (array3) {
  let sum = 0;
  let middle = [];
  if (array3.length <= 2) {
    return middle;
  }
  for (let i = 0; i < array3.length; i++) {
    sum = sum + array3[i];

  }
  return sum / array3.length

}



module.exports = middle