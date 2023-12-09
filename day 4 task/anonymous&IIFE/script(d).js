//d.Return all the prime numbers in an array
//anonymous function
const inputArray = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

const resultPrimes = (function(arr) {
  return arr.filter(function(num) {
    if (num < 2) return false;
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  });
})(inputArray);

console.log(resultPrimes); 

//IIFE
const primes = (function(arr) {
  return arr.filter(function(num) {
    if (num < 2) return false;
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  });
})([1,2,3,4,5,6,7,8,9,10]);
console.log(primes);


