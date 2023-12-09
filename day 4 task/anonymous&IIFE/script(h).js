//h.Rotate an array by k times
//anonymous function
const rotateArray = function(arr, k) {
    const n = arr.length;
    const rotatedArray = arr.slice(k % n).concat(arr.slice(0, k % n));
    return rotatedArray;
  };
  const inputArray = [1, 2, 3, 4, 5];
  const k = 2;
  const rotatedArray = rotateArray(inputArray, k);
  
  console.log(rotatedArray);


//IIFE
const rotatedArray = (function(arr, k) {
    const n = arr.length;
    return arr.slice(k % n).concat(arr.slice(0, k % n));
  })([1, 2, 3, 4, 5], 2);
  
  console.log(rotatedArray);
  

  