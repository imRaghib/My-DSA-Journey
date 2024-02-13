var answer = undefined;
function findFactorialRecursive(number) {
  if (answer === undefined) {
    answer = number;
  }
  if (number > 1) {
    answer = answer * (number - 1);
    number--;
  } else {
    return answer;
  }

  return findFactorialRecursive(number);
}

function findFactorialIterative(number) {
  var answer = number;
  for (let i = 0; i < number; i++) {
    answer = answer * (number - 1);
    number--;
  }
  return answer;
}
// res = findFactorialRecursive(5);
// console.log(res);

// res2 = findFactorialIterative(5);
// console.log(res2);

//His solution

/*
function findFactorialRecursive(number) {
  if (number === 2) {
    return 2;
  }

  return number * findFactorialRecursive(number - 1);
}

function findFactorialIterative(number) {
  var answer = 1;
  if (number === 2) {
    return 2;
  }
  for (let i = 2; i <= number; i++) {
    answer = answer * i;
  }
  return answer;
}
res = findFactorialRecursive(5);
console.log(res);

res2 = findFactorialIterative(5);
console.log(res2);

*/

// given index return fibonacci number
function fibonacciIerative(n) {
  let arr = [0, 1];
  if (index < 2) {
    return index;
  }

  for (let i = 2; i < n - 1; i++) {
    arr.push(arr[i - 2] + arr[i - 1]);
  }
  return arr[n];
}

function fibonacciRecursive(n) {
  if (n < 2) {
    return n;
  }
  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

res = fibonacciIerative(8);
console.log(res);

// res2 = fibonacciRecursive(5);
// console.log(res2);
