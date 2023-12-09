//b.Convert all the strings to title caps in a string array

const stringsArray = ["apple", "orange", "cherry", "grape"];
const convertToTitleCaps = arr => {
  return arr.map(str => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase());
};
const titleCapsArray = convertToTitleCaps(stringsArray);
console.log(titleCapsArray);
