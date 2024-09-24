//www.geeksforgeeks.org/problems/zero-sum-subarrays1825/1?itm_source=geeksforgeeks&itm_medium=article&itm_campaign=practice_card

//{ Driver Code Starts
//Initial Template for javascript
https: "use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", (_) => {
  inputString = inputString
    .trim()
    .split("\n")
    .map((string) => {
      return string.trim();
    });

  main();
});

function readLine() {
  return inputString[currentLine++];
}

function main() {
  let t = parseInt(readLine());
  for (let i = 0; i < t; i++) {
    let input_line = readLine().split(" ");
    let n = parseInt(input_line[0]);

    let arr = new Array(n);

    input_line = readLine().split(" ");
    for (let i = 0; i < n; i++) {
      arr[i] = parseInt(input_line[i]);
    }

    let obj = new Solution();

    let ans = obj.findSubarray(arr, n);
    console.log(ans);
  }
}
// } Driver Code Ends

//User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} n
 * @returns {number}
 */
class Solution {
  //Function to count subarrays with sum equal to 0.
  fact(n) {
    let res = 1;
    while (n) {
      res *= n--;
    }
    return res;
  }
  findSubarray(arr, n) {
    // code here
    const prefixSum = Array(n).fill(0);
    prefixSum[0] = arr[0];
    for (let i = 1; i < n; i++) {
      prefixSum[i] = prefixSum[i - 1] + arr[i];
    }

    const map = {};
    for (const item of prefixSum) {
      map[item] = (map[item] || 0) + 1;
    }

    let count = 0;
    for (const [key, value] of Object.entries(map)) {
      if (key == 0) {
        count += value;
      }

      if (value > 1) {
        count += this.fact(value) / (this.fact(value - 2) * this.fact(2));
      }
    }
    return count;
  }
}
