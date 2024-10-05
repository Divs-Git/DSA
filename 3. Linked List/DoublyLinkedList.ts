export {};

interface Node {
  data: number;
  prev: Node | null;
  next: Node | null;
}

function createNewNode(data: number): Node {
  return {
    data,
    prev: null,
    next: null,
  };
}

function addAtHead(head: Node | null, data: number): Node | null {
  let newNode = createNewNode(data);
  if (head === null) return newNode;

  newNode.next = head;
  head.prev = newNode;
  return newNode;
}

function removeAtHead(head: Node | null): Node | null {
  if (!head || !head.next) return null;

  let currentNode: Node | null = head;

  head = head.next;
  currentNode.next = null;
  currentNode.prev = null;

  return head;
}

function addAtTail(head: Node | null, data: number): Node | null {
  if (head === null) return createNewNode(data);

  let newNode: Node | null = createNewNode(data);
  let currentNode: Node | null = head;

  while (currentNode.next) {
    currentNode = currentNode.next;
  }

  currentNode.next = newNode;
  newNode.prev = currentNode;
  return head;
}

function removeAtTail(head: Node | null): Node | null {
  if (!head || !head.next) return null;
  let currentNode: Node | null = head;
  while (currentNode.next && currentNode.next.next) {
    currentNode = currentNode.next;
  }

  if (currentNode.next) {
    currentNode.next.prev = null;
    currentNode.next = null;
  }

  return head;
}

function printDLL(head: Node | null): void {
  if (!head) {
    console.log("Empty List");
    return;
  }
  let currentNode: Node | null = head;
  let str = "X<->";
  while (currentNode) {
    str += currentNode.data + "<->";
    currentNode = currentNode.next;
  }
  str += "X";
  console.log(str);
}

let head = null;

head = addAtHead(head, 30);
head = addAtHead(head, 20);
head = addAtHead(head, 10);
head = removeAtHead(head);
head = addAtTail(head, 40);
head = removeAtTail(head);
printDLL(head);
