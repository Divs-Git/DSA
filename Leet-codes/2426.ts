let count: number;

function merge(
  nums: number[],
  lefti: number,
  righti: number,
  leftj: number,
  rightj: number,
  diff: number
) {
  let a = nums.slice(lefti, righti + 1);
  let b = nums.slice(leftj, rightj + 1);
  let k = lefti;
  let i = 0,
    j = 0;
  while (i < a.length && j < b.length) {
    if (a[i] >= b[j] - diff) {
      count += a.length - i;
      j++;
    } else {
      i++;
    }
  }
  (i = 0), (j = 0);
  while (i < a.length && j < b.length) {
    if (a[i] < b[j]) {
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

function mergeSort(nums: number[], i: number, j: number, diff: number) {
  if (i >= j) return;
  let mid = Math.floor((i + j) / 2);
  mergeSort(nums, i, mid, diff);
  mergeSort(nums, mid + 1, j, diff);
  merge(nums, i, mid, mid + 1, j, diff);
}

function numberOfPairs(nums1: number[], nums2: number[], diff: number): number {
  let f: number[] = [];
  count = 0;
  for (let i = 0; i < nums1.length; i++) {
    f.push(nums2[i] - nums1[i]);
  }
  mergeSort(f, 0, f.length - 1, diff);
  return count;
}
