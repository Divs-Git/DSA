const bubbleSort = (arr: number[]): void => {
  const n = arr.length;
  let isSwapped = false;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j <= n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        isSwapped = true;
      }
    }
    if (isSwapped === false) {
      break;
    }
  }
};

const arr2 = [15, 1, 6, 3, -1, 2, 10];
bubbleSort(arr2);
console.log(arr2);
