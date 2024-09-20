let count: number;

function merge(
  nums: number[],
  lefti: number,
  righti: number,
  leftj: number,
  rightj: number
) {
  let a = nums.slice(lefti, righti + 1);
  let b = nums.slice(leftj, rightj + 1);
  let k = lefti,
    i = 0,
    j = 0;

  while (i < a.length && j < b.length) {
    if (a[i] > 2 * b[j]) {
      count += a.length - i;
      j++;
    } else {
      i++;
    }
  }
  (i = 0), (j = 0);

  while (i < a.length && j < b.length) {
    if (a[i] <= b[j]) {
      nums[k++] = a[i++];
    } else {
      nums[k++] = b[j++];
    }
  }

  while (i < a.length) {
    nums[k++] = a[i++];
  }

  while (j < b.length) {
    nums[k++] = b[j++];
  }
}

function mergeSort(nums: number[], i: number, j: number) {
  if (i >= j) return;
  let mid = Math.floor((i + j) / 2);
  mergeSort(nums, i, mid);
  mergeSort(nums, mid + 1, j);
  merge(nums, i, mid, mid + 1, j);
}

function reversePairs(nums: number[]): number {
  count = 0;
  mergeSort(nums, 0, nums.length - 1);
  return count;
}
