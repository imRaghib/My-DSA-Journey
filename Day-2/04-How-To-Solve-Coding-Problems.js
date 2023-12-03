//find common between two arrays then true or false

// Example
// const array1 = ["a", "b", "c", "x"];
// const array2 = ["z", "y", "i"];
// should return false

// const array1 = ["a", "b", "c", "x"];
// const array2 = ["z", "y", "x"];
// should return true

const findCommon = (array1, array2) => {
  const map = {};
  for (let i = 0; i < array1.length; i++)
    if (!map[array1]) map[array1[i]] = true;

  for (let j = 0; j < array2.length; j++) {
    if (map[array2[j]]) return true;
  }
  return false;
};

const array1 = ["a", "b", "c", "x"];
const array2 = ["z", "y", "x"];
console.log(findCommon(array1, array2));

const common = (arr1, arr2) => {
  return arr1.some((item) => arr2.includes(item));
};
console.log(common(array1, array2));
