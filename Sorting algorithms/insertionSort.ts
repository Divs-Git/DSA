function insertionSort(arr: number[]): number[] {
  for (let i = 1; i < arr.length; i++) {
    let currElement = arr[i];
    let j = i - 1;
    while (arr[j] > currElement && j >= 0) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = currElement;
  }
  return arr;
}

console.log(insertionSort([15, 1, 6, 3, -1, 2, 10]));
