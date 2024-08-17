function sortArr(arr) {
  let i = 0;
  let j = arr.length - 1;
  while (i < j) {
    if (arr[i] == 0) {
      i++;
    } else {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      j--;
    }
  }
}

const arr = [0, 1, 0, 0, 1, 0];
sortArr(arr);
console.log(arr);
