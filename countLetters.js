
const countLetters = function (string) {
  const count = {};

  for (let i = 0; i < string.length; i++) {
    const letter = string[i];
    if (count[letter]) {
      count[letter]++;
    }
    else {
      count[letter] = 1;
    }
  }
  return count;
};

console.log(countLetters('LHL'));
console.log(countLetters('I am learning to code at LHL'));

