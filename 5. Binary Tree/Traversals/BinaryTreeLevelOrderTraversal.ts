// https://leetcode.com/problems/binary-tree-level-order-traversal/description/
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function levelOrder(root: TreeNode | null): number[][] {
  let res: number[][] = [];
  let q: TreeNode[] = [];

  if (root === null) return res;
  q.push(root);
  while (q.length !== 0) {
    let level: number[] = [];
    let size: number = q.length;
    for (let i = 0; i < size; i++) {
      let node: TreeNode = q[0];
      q.shift();
      if (node.left !== null) q.push(node.left);
      if (node.right !== null) q.push(node.right);
      level.push(node.val);
    }
    res.push(level);
  }
  return res;
}
