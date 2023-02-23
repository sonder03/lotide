// const eqArrays = function (a1, a2) {
//   for (i = 0; i < a1.length; i++) {
//     if (a1[i] !== a2[i]) {
//       return false;
//     }
//   }
//   return true
// };

// const assertArraysEqual = function (array1, array2) {
//   var v = eqArrays(array1, array2);
//   if (v === true) {
//     console.log("Arrays are equal")
//   }
//   else { 
//     console.log("arrays are not equal") }
// } 
// // assertArraysEqual([7,9,9],[8,8,8])
// // assertArraysEqual([7,9,9],[7,9,9])
// // assertArraysEqual([7,9,8],[7, 9 , 8])

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

  if (array3.length % 2 === 0) {
    middle = [array3.length / 2 - 1]
  }
  else middle = sum
}



module.exports = middle