function verticalTraversal(root: TreeNode | null): number[][] {
  // Map to store nodes based on vertical and level information
  const nodes: Map<number, Map<number, number[]>> = new Map();

  // Queue for BFS traversal, each element is a tuple containing a node and its vertical and level information
  const q: [TreeNode, [number, number]][] = [];

  // Initialize the queue with the root node at vertical 0 and level 0
  if (root) {
    q.push([root, [0, 0]]);
  }

  // Perform BFS traversal
  while (q.length > 0) {
    // Dequeue the front element
    const [temp, [x, y]] = q.shift()!;

    // Initialize the map for the current vertical if it doesn't exist
    if (!nodes.has(x)) {
      nodes.set(x, new Map());
    }

    // Initialize the set for the current level if it doesn't exist
    if (!nodes.get(x)!.has(y)) {
      nodes.get(x)!.set(y, []);
    }

    // Add the current node's value to the map
    nodes.get(x)!.get(y)!.push(temp.val);

    // Enqueue the left child with updated vertical and level
    if (temp.left) {
      q.push([temp.left, [x - 1, y + 1]]);
    }

    // Enqueue the right child with updated vertical and level
    if (temp.right) {
      q.push([temp.right, [x + 1, y + 1]]);
    }
  }

  // Prepare the final result array
  const ans: number[][] = [];

  // Sort the vertical keys
  const sortedKeys = Array.from(nodes.keys()).sort((a, b) => a - b);

  // Process each vertical
  for (const key of sortedKeys) {
    const col: number[] = [];
    const levelMap = nodes.get(key)!;

    // Sort the level keys
    const sortedLevelKeys = Array.from(levelMap.keys()).sort((a, b) => a - b);

    // Process each level
    for (const levelKey of sortedLevelKeys) {
      const values = levelMap.get(levelKey)!;
      // Sort the values at the same level
      values.sort((a, b) => a - b);
      col.push(...values);
    }
    ans.push(col);
  }

  return ans;
}

// Preorder

let map: Record<number, { row: number; val: number }[]> = {};
let minCol: number;
let maxCol: number;

function preOrder(node: TreeNode | null, col: number, row: number): void {
  if (node === null) return;

  if (!map[col]) map[col] = [{ row, val: node.val }];
  else map[col].push({ row, val: node.val });

  minCol = Math.min(minCol, col);
  maxCol = Math.max(maxCol, col);

  preOrder(node.left, col - 1, row + 1);
  preOrder(node.right, col + 1, row + 1);
}

function verticalTraversal(root: TreeNode | null): number[][] {
  map = {};
  minCol = Infinity;
  maxCol = -Infinity;
  preOrder(root, 0, 0);
  const res: number[][] = [];

  for (const key in map) {
    map[key].sort((a, b) => (a.row === b.row ? a.val - b.val : a.row - b.row));
  }

  for (let i = minCol; i <= maxCol; i++) {
    res.push(map[i].map((node) => node.val));
  }

  return res;
}
