/**
 Do not return anything, modify matrix in-place instead.
 */
// https://leetcode.com/problems/set-matrix-zeroes/description/

// SC: O(1)
function setZeroes(matrix: number[][]): void {
  let isRow: boolean = false;
  let isCol: boolean = false;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === 0) {
        if (i === 0) isRow = true;
        if (j === 0) isCol = true;
        matrix[i][0] = 0;
        matrix[0][j] = 0;
      }
    }
  }

  for (let i = 1; i < matrix.length; i++) {
    for (let j = 1; j < matrix[0].length; j++) {
      if (matrix[i][0] === 0 || matrix[0][j] === 0) {
        matrix[i][j] = 0;
      }
    }
  }

  if (isRow) {
    for (let i = 0; i < matrix[0].length; i++) {
      matrix[0][i] = 0;
    }
  }

  if (isCol) {
    for (let i = 0; i < matrix.length; i++) {
      matrix[i][0] = 0;
    }
  }
}

// SC: O(n+m)
/**
 Do not return anything, modify matrix in-place instead.
 */
function setZeroCols(matrix: number[][], col: number) {
  for (let row = 0; row < matrix.length; row++) {
    matrix[row][col] = 0;
  }
}

function setZeroRows(matrix: number[][], row: number) {
  for (let col = 0; col < matrix[0].length; col++) {
    matrix[row][col] = 0;
  }
}

function setZeroes(matrix: number[][]): void {
  const zeroCols = new Set<number>();
  const zeroRows = new Set<number>();

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === 0) {
        zeroCols.add(j);
        zeroRows.add(i);
      }
    }
  }

  zeroCols.forEach((zeroCol) => setZeroCols(matrix, zeroCol));
  zeroRows.forEach((zeroRow) => setZeroRows(matrix, zeroRow));
}
