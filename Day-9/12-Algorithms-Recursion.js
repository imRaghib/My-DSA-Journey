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
res = findFactorialRecursive(5);
console.log(res);

res2 = findFactorialIterative(5);
console.log(res2);
