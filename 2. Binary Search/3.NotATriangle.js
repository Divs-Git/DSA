// https://www.spoj.com/problems/NOTATRI/

const fs = require("fs");

process.stdin.resume();
process.stdin.setEncoding("utf8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", () => {
  inputString = inputString.split("\n");

  main();
});

function readLine() {
  return inputString[currentLine++];
}

function upperBound(arr, sum) {
  let ans = arr.length;
  let lo = 0;
  let hi = arr.length - 1;

  while (lo <= hi) {
    let mid = Math.floor((lo + hi) / 2);
    if (arr[mid] <= sum) {
      lo = mid + 1;
    } else {
      ans = mid;
      hi = mid - 1;
    }
  }

  return ans;
}

function main() {
  while (true) {
    const len = Number(readLine());
    if (len === 0) {
      break;
    }

    const arr = readLine().split(" ").map(Number);
    arr.sort((a, b) => a - b);
    let cnt = 0;
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        let sum = arr[i] + arr[j];
        const k = upperBound(arr, sum);
        if (k >= arr.length) continue;
        cnt += arr.length - k;
      }
    }
    console.log(cnt);
  }
}
