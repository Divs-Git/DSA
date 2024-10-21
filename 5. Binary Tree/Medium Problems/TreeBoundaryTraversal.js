// https://www.geeksforgeeks.org/problems/boundary-traversal-of-binary-tree/1

/**
 * @param {Node} root
 * @returns {number[]}
 */
function isLeaf(node) {
  if (node.left === null && node.right === null) {
    return true;
  }
  return false;
}

function addLeftBoundary(node, res) {
  let curr = node.left;
  while (curr) {
    if (!isLeaf(curr)) res.push(curr.data);
    if (curr.left) {
      curr = curr.left;
    } else {
      curr = curr.right;
    }
  }
}

function addLeafNodes(node, res) {
  if (isLeaf(node)) {
    res.push(node.data);
    return;
  }
  if (node.left) addLeafNodes(node.left, res);
  if (node.right) addLeafNodes(node.right, res);
}

function addRightBoundary(node, res) {
  let temp = [];
  let curr = node.right;
  while (curr) {
    if (!isLeaf(curr)) temp.push(curr.data);
    if (curr.right) curr = curr.right;
    else curr = curr.left;
  }

  for (let i = temp.length - 1; i >= 0; i--) {
    res.push(temp[i]);
  }
}

class Solution {
  boundary(root) {
    //your goes code here
    let res = [];
    if (root === null) return [];
    if (!isLeaf(root)) res.push(root.data);
    addLeftBoundary(root, res);
    addLeafNodes(root, res);
    addRightBoundary(root, res);
    return res;
  }
}
