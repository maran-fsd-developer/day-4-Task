//Return all the palindromes in an array

const isPalindrome = str => {
    const cleanStr = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
    const reversedStr = cleanStr.split('').reverse().join('');
    return cleanStr === reversedStr;
  };
  const findPalindromes = arr => arr.filter(isPalindrome);
  const words = ["level", "hello", "civic", "world", "radar"];
  const palindromeWords = findPalindromes(words);
  console.log(palindromeWords);
  