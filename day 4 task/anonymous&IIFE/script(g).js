//g.Remove duplicates from an array
//annnymous function
const removeDuplicates = function(arr) {
    return arr.filter(function(value, index, self) {
      return self.indexOf(value) === index;
    });
  };
  const inputArray = [1, 2, 2, 3, 4, 4, 5];
  const resultWithoutDuplicates = removeDuplicates(inputArray);
  console.log(resultWithoutDuplicates);

  //IIFE
  const uniqueArray = (function(arr) {
    return arr.filter(function(value, index, self) {
      return self.indexOf(value) === index;
    });
  })([1, 2, 2, 3, 4, 4, 5]);
  console.log(uniqueArray); 
  