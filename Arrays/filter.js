const arr = [1, 2, 3, 4, 5, 6];
function evenOrOdd(x) {
  return x % 2 == 0;
}

const res = arr.filter(evenOrOdd);
console.log(res);
