//a.Print odd numbers in an array

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const printOddNumbers = arr => {
  arr.forEach(num => {
    if (num % 2 !== 0) {
      console.log(num);
    }
  });
};
printOddNumbers(numbers);