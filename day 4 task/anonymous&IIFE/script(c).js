//c.Sum of all numbers in an array
//anonymous function
let numbers = [1, 2, 3, 4, 5,6,7,8,9,10];
let calculateSum = function(arr) {
  let sum = 0;
  for (let number of arr) {
    sum += number;
  }
  return sum;
};
let result = calculateSum(numbers);
console.log(result);


//IIFE
let numbers = [1, 2, 3, 4, 5,6,7,8,9,10];
let result = (function(arr) {
  let sum = 0;
  for (let number of arr) {
    sum += number;
  }
  return sum;
})(numbers);
console.log(result);