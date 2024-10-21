let map, minCol, maxCol;
class Solution {
  //Function to return a list of nodes visible from the top view
  //from left to right in Binary Tree.
  topView(root) {
    //your code here
    if (root === null) return [];

    map = {};
    minCol = Infinity;
    maxCol = -Infinity;

    let q = [];
    q.push({ node: root, col: 0 });

    while (q.length > 0) {
      let { node, col } = q.shift();

      if (!map.hasOwnProperty(col)) {
        map[col] = node.data;
        minCol = Math.min(minCol, col);
        maxCol = Math.max(maxCol, col);
      }

      if (node.left) {
        q.push({ node: node.left, col: col - 1 });
      }
      if (node.right) {
        q.push({ node: node.right, col: col + 1 });
      }
    }
    let res = [];
    for (let i = minCol; i <= maxCol; i++) {
      res.push(map[i]);
    }

    return res;
  }
}
