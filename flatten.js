const flatten = function(...array){
 return array.flat();
}
console.log(flatten([1,2,3], [6, 7], [5, 6, 99]));


module.exports = flatten

