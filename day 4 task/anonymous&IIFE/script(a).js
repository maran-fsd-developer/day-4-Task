//a.Print odd numbers in an array
//anonymous function

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let printOddNumbers = function(arr) {
  for (let number of arr) {
    if (number % 2 !== 0) {
      console.log(number);
    }
  }
};
printOddNumbers(numbers);

//IIFE
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
(function(arr) {
  for (let number of arr) {
    if (number % 2 !== 0) {
      console.log(number);
    }
  }
})(numbers);
