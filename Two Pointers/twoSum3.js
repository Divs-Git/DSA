const arr = [1, 5, 7, -1, 5];
const target = 6;

const comp = (x, y) => {
  return x - y;
};

const twoSum = (arr, target) => {
  arr = arr.sort(comp);
  let start = 0;
  let end = arr.length - 1;
  let count = 0;

  while (start < end) {
    if (arr[start] + arr[end] > target) {
      end--;
    } else if (arr[start] + arr[end] < target) {
      start++;
    } else {
      // if element is same
      if (arr[start] === arr[end]) {
        let occ = end - start + 1;
        count += Math.floor((occ * (occ - 1)) / 2);
      } else {
        let x = 0;
        let y = 0;
        let a_s = arr[start];
        while (a_s === arr[start]) {
          start++;
          x++;
        }
        let a_e = arr[end];
        while (a_e === arr[end]) {
          end--;
          y++;
        }
        count += x * y;
      }
    }
  }
  return count;
};

const res = twoSum(arr, target);
console.log(res);
