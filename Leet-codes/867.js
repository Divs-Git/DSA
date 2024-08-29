// https://leetcode.com/problems/transpose-matrix/description/
var transpose = function (matrix) {
  const res = Array(matrix[0].length);
  for (let i = 0; i < res.length; i++) {
    res[i] = Array(matrix.length);
  }
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      res[j][i] = matrix[i][j];
    }
  }
  return res;
};
