// @ts-ignore
function heightOfTree(root: Node) {
  if (root === null) return 0;
  // @ts-ignore
  let leftHeight = heightOfTree(root.left);
  // @ts-ignore
  let rightHeight = heightOfTree(root.right);

  return 1 + Math.max(leftHeight, rightHeight);
}

// @ts-ignore
heightOfTree(root);
