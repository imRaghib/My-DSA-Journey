function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    let temp = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    arr[i] = arr[min];
    arr[min] = temp;
  }
  return arr;
}

res = selectionSort([6, 5, 3, 1, 8, 7, 2, 4]);
console.log(res);
