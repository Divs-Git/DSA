// https://leetcode.com/problems/balanced-binary-tree/description/

// O(n*n)
function getHeight(node: TreeNode | null): number {
  if (node === null) {
    return 0;
  }

  let lh = getHeight(node.left);
  let rh = getHeight(node.right);

  return 1 + Math.max(lh, rh);
}

function isBalanced(root: TreeNode | null): boolean {
  if (root === null) {
    return true;
  }

  let lh = getHeight(root.left);
  let rh = getHeight(root.right);

  if (Math.abs(lh - rh) <= 1 && isBalanced(root.left) && isBalanced(root.right))
    return true;
  return false;
}

// O(n)
function checkHeight(node: TreeNode | null): number {
  if (node === null) {
    return 0;
  }

  let lh = checkHeight(node.left);
  let rh = checkHeight(node.right);
  if (lh === -1 || rh === -1) return -1;
  if (Math.abs(lh - rh) > 1) return -1;

  return 1 + Math.max(lh, rh);
}

function isBalanced(root: TreeNode | null): boolean {
  if (root === null) return true;
  let res = checkHeight(root);
  return res === -1 ? false : true;
}
