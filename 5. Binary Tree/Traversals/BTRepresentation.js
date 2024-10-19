class Node {
  data;
  left;
  right;

  constructor(value) {
    this.data = value;
    this.left = null;
    this.right = null;
  }
}

const root = new Node(10);
root.left = new Node(20);
root.left.right = new Node(30);
