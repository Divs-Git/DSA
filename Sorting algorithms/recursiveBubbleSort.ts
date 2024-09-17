const recursiveBubbleSort = (arr: number[], k: number, i: number): void => {
  if (k === 0) return;
  if (i === k) {
    recursiveBubbleSort(arr, k - 1, 0);
    return;
  }

  if (arr[i] > arr[i + 1]) {
    [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
  }
  recursiveBubbleSort(arr, k, i + 1);
};

const arr3 = [15, 1, 6, 3, -1, 2, 10];
recursiveBubbleSort(arr3, arr3.length, 0);
console.log(arr3);
