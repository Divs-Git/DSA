// https://leetcode.com/problems/binary-tree-preorder-traversal/
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

function preOrderRec(node: TreeNode | null, res: number[]) {
  if (node === null) {
    return;
  }

  res.push(node.val);
  preOrderRec(node.left, res);
  preOrderRec(node.right, res);
}

function preorderTraversal(root: TreeNode | null): number[] {
  let res: number[] = [];
  preOrderRec(root, res);
  return res;
}

// Iterative
function preorderTraversal(root: TreeNode | null): number[] {
  let st: TreeNode[] = [];
  let res: number[] = [];
  if (root === null) return res;
  st.push(root);

  while (st.length > 0) {
    let node = st[st.length - 1];
    st.pop();
    res.push(node.val);

    if (node.right !== null) {
      st.push(node.right);
    }
    if (node.left !== null) {
      st.push(node.left);
    }
  }

  return res;
}
