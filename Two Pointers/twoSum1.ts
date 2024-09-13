// https://leetcode.com/problems/two-sum/description/

// Brute force
function twoSum1(nums: number[], target: number): number[] {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  return [];
}

// Optimized
function sortFunc(x: number[], y: number[]) {
  return x[0] - y[0];
}

function twoSum1Optimized(nums: number[], target: number): number[] {
  // mapping before sort, so that the we have track of index
  const idxTrack: number[][] = new Array(nums.length).fill([]);
  for (let i = 0; i < nums.length; i++) {
    idxTrack[i] = [nums[i], i];
  }

  // sort
  idxTrack.sort(sortFunc);

  // target find algorithm
  let i: number = 0;
  let j: number = nums.length - 1;

  while (i < j) {
    if (idxTrack[i][0] + idxTrack[j][0] === target) {
      return [idxTrack[i][1], idxTrack[j][1]];
    } else if (idxTrack[i][0] + idxTrack[j][0] > target) {
      j--;
    } else {
      i++;
    }
  }

  return [];
}
