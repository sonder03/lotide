// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);  
//   } else {
//     console.log(`🛑🛑🛑 Assertion Failed: ${actual} != ${expected}`);
//   }
// };

const countLetters = function (string) {
  const count = {};

for ( let i = 0; i < string.length; i ++){
 const letter = string[i];
 if(count[letter]){
  count[letter] ++;
 }
 else {
  count[letter] = 1;
 }
}
return count;
};

console.log(countLetters('LHL'));


// TEST CODE
// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);
// assertEqual("Assert", "Assert");
// assertEqual("time", "year");
// assertEqual(100, 101);
