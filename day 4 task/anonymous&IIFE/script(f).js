//f.Return median of two sorted arrays of the same size
//anonymous function
const findMedian = function(arr1, arr2) {
    const mergedArray = arr1.concat(arr2);
    const sortedArray = mergedArray.sort((a, b) => a - b);
    const length = sortedArray.length;
    const middle = Math.floor(length / 2);
    if (length % 2 === 0) {
      return (sortedArray[middle - 1] + sortedArray[middle]) / 2;
    } else {
      return sortedArray[middle];
    }
  };
  const array1 = [1, 2, 3, 4, 5];
  const array2 = [6, 7, 8, 9, 10];
  const median = findMedian(array1, array2);
  console.log(median);

  //IIFE
  const array1 = [1, 2, 3, 4, 5];
const array2 = [6, 7, 8, 9, 10];
const median = (function(arr1, arr2) {
  const mergedArray = arr1.concat(arr2);
  const sortedArray = mergedArray.sort((a, b) => a - b);
  const length = sortedArray.length;
  const middle = Math.floor(length / 2);
  if (length % 2 === 0) {
    return (sortedArray[middle - 1] + sortedArray[middle]) / 2;
  } else {
    return sortedArray[middle];
  }
})(array1, array2);
console.log(median);

  