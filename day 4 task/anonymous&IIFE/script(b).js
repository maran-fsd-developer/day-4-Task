//b.Convert all the strings to title caps in a string array
//anonymous function
let strings = ["apple","orange","grape","pomegranet"];

let convertToTitleCase = function(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  }
};
convertToTitleCase(strings);
console.log(strings);


//IIFE
let strings = ["apple","orange","grape","pomegranet"];

(function(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  }
})(strings);

console.log(strings);
