class Solution {
  // Function to count inversions in the array.
  constructor(public cnt: number = 0) {}
  merge(
    arr: number[],
    lefti: number,
    leftj: number,
    righti: number,
    rightj: number
  ) {
    let a = arr.slice(lefti, leftj + 1);
    let b = arr.slice(righti, rightj + 1);
    let k = lefti;

    let i = 0;
    let j = 0;

    while (i < a.length && j < b.length) {
      if (a[i] <= b[j]) {
        arr[k++] = a[i++];
      } else {
        this.cnt += a.length - i;
        arr[k++] = b[j++];
      }
    }

    while (i < a.length) {
      arr[k++] = a[i++];
    }
    while (j < b.length) {
      arr[k++] = b[j++];
    }
  }
  mergeSort(arr: number[], i: number, j: number) {
    if (i >= j) return;
    let mid = Math.floor((i + j) / 2);
    this.mergeSort(arr, i, mid);
    this.mergeSort(arr, mid + 1, j);
    this.merge(arr, i, mid, mid + 1, j);
  }

  inversionCount(arr: number[]) {
    this.cnt = 0;
    this.mergeSort(arr, 0, arr.length - 1);
    return this.cnt;
  }
}
