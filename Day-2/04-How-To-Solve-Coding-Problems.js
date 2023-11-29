//find common between two arrays then true or false

// Example
// const array1 = ["a", "b", "c", "x"];
// const array2 = ["z", "y", "i"];
// should return false

// const array1 = ["a", "b", "c", "x"];
// const array2 = ["z", "y", "x"];
// should return true

const findCommon = (array1, array2) => {
  array1.forEach((i) => {
    array2.forEach((j) => {
      if (array1[j] === array2[i]) {
        return true;
      }
    });
  });
  return false;
};

findCommon(["a", "b", "c", "x"], ["z", "y", "x"]);
