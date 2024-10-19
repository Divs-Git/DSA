// https://leetcode.com/problems/binary-tree-inorder-traversal/description/
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
function inOrderRec(node: TreeNode | null, res: number[]): void {
  if (node === null) return;
  inOrderRec(node.left, res);
  res.push(node.val);
  inOrderRec(node.right, res);
}

function inorderTraversal(root: TreeNode | null): number[] {
  let res: number[] = [];
  inOrderRec(root, res);
  return res;
}

// Iterative
function inorderTraversal(root: TreeNode | null): number[] {
  let st: TreeNode[] = [];
  let res: number[] = [];
  if (root === null) return res;
  let node: TreeNode | null = root;
  while (true) {
    if (node !== null) {
      st.push(node);
      node = node.left;
    } else {
      if (st.length === 0) break;
      node = st.pop();
      res.push(node.val);
      node = node.right;
    }
  }
  return res;
}
