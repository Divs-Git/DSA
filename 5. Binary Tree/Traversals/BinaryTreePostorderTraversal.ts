// https://leetcode.com/problems/binary-tree-postorder-traversal/submissions/1427099042/
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
function postOrderRec(node: TreeNode | null, res: number[]): void {
  if (node === null) return;
  postOrderRec(node.left, res);
  postOrderRec(node.right, res);
  res.push(node.val);
}

function postorderTraversal(root: TreeNode | null): number[] {
  let res: number[] = [];
  postOrderRec(root, res);
  return res;
}

// Iterative using 2 stacks
function postorderTraversal(root: TreeNode | null): number[] {
  let st1: TreeNode[] = [];
  let st2: TreeNode[] = [];
  let res: number[] = [];
  if (root === null) return res;

  st1.push(root);
  while (st1.length > 0) {
    let node = st1.pop();
    st2.push(node);

    if (node.left !== null) {
      st1.push(node.left);
    }
    if (node.right !== null) {
      st1.push(node.right);
    }
  }

  while (st2.length > 0) {
    res.push(st2.pop().val);
  }

  return res;
}

// Iterative using 1 stack
function postorderTraversal(root: TreeNode | null): number[] {
  let st: TreeNode[] = [];
  let res: number[] = [];
  if (root === null) return res;

  let curr = root;

  while (curr != null || st.length > 0) {
    if (curr !== null) {
      st.push(curr);
      curr = curr.left;
    } else {
      let temp = st[st.length - 1].right;
      if (temp == null) {
        temp = st.pop();
        res.push(temp.val);
        while (st.length > 0 && temp === st[st.length - 1].right) {
          temp = st.pop();
          res.push(temp.val);
        }
      } else {
        curr = temp;
      }
    }
  }
  return res;
}
