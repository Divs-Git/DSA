// https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/description/
function zigzagLevelOrder(root: TreeNode | null): number[][] {
  let q: TreeNode[] = [];
  let res: number[][] = [];

  if (root === null) return [];
  q.push(root);
  let flag = 1;
  while (q.length > 0) {
    let size = q.length;
    let level: number[] = new Array(size);
    for (let i = 0; i < size; i++) {
      let node = q.shift();
      let idx = flag ? i : size - 1 - i;

      level[idx] = node.val;
      if (node.left !== null) {
        q.push(node.left);
      }

      if (node.right !== null) {
        q.push(node.right);
      }
    }
    flag = flag ^ 1;
    res.push(level);
  }

  return res;
}
