// Creating
const outer = Array(5);
for (let i = 0; i < outer.length; i++) {
  const inner = Array(6).fill(0);
  outer[i] = inner;
}

console.log(outer);

// Accessing
outer[0][2] = 11;
outer[1][4] = 12;
// console.log(outer);
// console.log(outer[2][3]);

// Printing row wise
let str = "";
for (let i = 0; i < outer.length; i++) {
  for (let j = 0; j < outer[i].length; j++) {
    str += outer[i][j] + " ";
  }
}
// console.log(str);

// Printing column wise
let grid = [
  [1, 2, 3],
  [34, 5, 6],
  [34, 3, 3],
  [2, 3, 4],
];
let m = 4;
let n = 3;
let str2 = "";
for (let j = 0; j < n; j++) {
  for (let i = 0; i < m; i++) {
    str2 += grid[i][j] + " ";
  }
}
console.log(str2);

// Wave Matrix
let matrix = [
  [1, 2, 3],
  [3, 4, 6],
  [34, 5, 6],
  [4, 5, 6],
];

let row = 4;
let col = 3;
let st = "";
for (let i = 0; i < col; i++) {
  if (i % 2 == 0) {
    for (let j = 0; j < row; j++) {
      st += matrix[j][i] + " ";
    }
  } else {
    for (let j = row - 1; j >= 0; j--) {
      st += matrix[j][i] + " ";
    }
  }
}
console.log(st);
