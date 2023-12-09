//c.Sum of all numbers in an array
const numbers = [66,22,88,62,48];
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum);
