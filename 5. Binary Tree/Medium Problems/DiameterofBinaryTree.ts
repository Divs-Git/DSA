// https://leetcode.com/problems/diameter-of-binary-tree/description/
let maxi = 0;

function getHeight(node: TreeNode | null): number {
  if (node === null) return 0;
  let lh = getHeight(node.left);
  let rh = getHeight(node.right);

  maxi = Math.max(maxi, lh + rh);

  return 1 + Math.max(lh, rh);
}
function diameterOfBinaryTree(root: TreeNode | null): number {
  maxi = 0;
  getHeight(root);
  return maxi;
}
