// https://leetcode.com/problems/binary-tree-maximum-path-sum/description/
let maxSum = -Infinity;

function maxPath(node: TreeNode | null): number {
  if (node === null) return 0;

  let leftSum = maxPath(node.left);
  let rightSum = maxPath(node.right);
  leftSum = leftSum < 0 ? 0 : leftSum;
  rightSum = rightSum < 0 ? 0 : rightSum;
  maxSum = Math.max(maxSum, node.val + leftSum + rightSum);
  return node.val + Math.max(leftSum, rightSum);
}

function maxPathSum(root: TreeNode | null): number {
  maxSum = -Infinity;
  maxPath(root);
  return maxSum;
}
