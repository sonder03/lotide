const eqArrays = function (a1, a2) {
  for (i = 0; i < a1.length; i++) {
    if (a1[i] !== a2[i]) {
     return false;
    }
  }
  return true
};



module.exports = eqArrays;

