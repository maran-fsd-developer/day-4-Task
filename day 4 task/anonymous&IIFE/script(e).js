//e.Return all the palindromes in an array  
// anonymous function

const findPalindromes = function(arr) {
    return arr.filter(function(str) {
      const reversed = str.split('').reverse().join('');
      return str === reversed;
    });
  };
  const inputArray = ["level", "radar", "hello", "madam", "world"];
  const resultPalindromes = findPalindromes(inputArray);
  console.log(resultPalindromes);
  
  //IIFE

  const palindromes = (function(arr) {
    return arr.filter(function(str) {
      const reversed = str.split('').reverse().join('');
      return str === reversed;
    });
  })(["level", "radar", "hello", "madam", "world"]);
  
  console.log(palindromes);