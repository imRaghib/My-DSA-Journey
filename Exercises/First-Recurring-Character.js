//given an array = [2,5,1,2,3,5,1,4]
//it should return 2

//given an array = [2,1,1,2,3,5,1,2,4]
//it should return 1

//given an array = [2,3,4,5]
//it should return undefined

const arr = [2, 7, 1, 9, 3, 5, 4, 4];
// const arr = [2, 3, 4, 5];

const func = (arr) => {
  var i = 0;
  var j = 1;
  var next = 2;
  var arrlength = arr.length - 1;

  while (i < arr.length) {
    if (arr[i] === arr[j]) return arr[i];
    else if (j > arrlength) {
      j = next;
      i++;
      next++;
      arrlength--;
    } else {
      j++;
    }
  }
  return undefined;
};

const response = func(arr);
console.log(response);
