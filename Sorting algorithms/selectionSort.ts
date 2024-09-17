const selectionSort = (arr: number[]): void => {
  for (let i = 0; i < arr.length; i++) {
    let minIdx = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIdx]) {
        minIdx = j;
      }
    }
    [arr[minIdx], arr[i]] = [arr[i], arr[minIdx]];
  }
};
const arr1 = [15, 1, 6, 3, -1, 2, 10];
selectionSort(arr1);
console.log(arr1);
