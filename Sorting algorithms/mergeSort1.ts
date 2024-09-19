function merge(left: number[], right: number[]): number[] {
  let res = [];
  let i = 0;
  let j = 0;
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      res.push(left[i]);
      i++;
    } else {
      res.push(right[j]);
      j++;
    }
  }

  while (i < left.length) {
    res.push(left[i]);
    i++;
  }

  while (j < right.length) {
    res.push(right[j]);
    j++;
  }

  return res;
}

function mergeSort(arr: number[], i: number, j: number): number[] {
  if (i == j) {
    let temp = [arr[i]];
    return temp;
  }
  let mid = Math.floor((i + j) / 2);

  let left = mergeSort(arr, i, mid);
  let right = mergeSort(arr, mid + 1, j);
  let res = merge(left, right);
  return res;
}

let arr6: number[] = [12, 34, -1, 23, 4, 5];
arr6 = mergeSort(arr6, 0, arr6.length - 1);
console.log(arr6);
