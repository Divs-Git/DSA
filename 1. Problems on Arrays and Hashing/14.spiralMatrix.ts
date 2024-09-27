// https://leetcode.com/problems/spiral-matrix/
function spiralOrder(matrix: number[][]): number[] {
  let res: number[] = [];
  let m = matrix.length;
  let n = matrix[0].length;
  let count = m * n;

  let sr = 0;
  let ec = n - 1;
  let sc = 0;
  let er = m - 1;

  while (count > 0) {
    // start row
    for (let i = sr; i <= ec; i++) {
      res.push(matrix[sr][i]);
      count--;
    }
    sr++;
    if (count === 0) break;

    // end col
    for (let i = sr; i <= er; i++) {
      res.push(matrix[i][ec]);
      count--;
    }
    ec--;
    if (count === 0) break;

    // end row
    for (let i = ec; i >= sc; i--) {
      res.push(matrix[er][i]);
      count--;
    }
    er--;
    if (count === 0) break;

    // start col
    for (let i = er; i >= sr; i--) {
      res.push(matrix[i][sc]);
      count--;
    }
    sc++;
    if (count === 0) break;
  }

  return res;
}
