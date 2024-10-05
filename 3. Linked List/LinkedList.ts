export {};

interface Head {
  data: number;
  next: Head | null;
}

function createNewNode(data: number): Head {
  return {
    data,
    next: null,
  };
}

function addAtHead(head: Head | null, data: number) {
  const newNode = createNewNode(data);
  newNode.next = head;
  return newNode;
}

function printLL(head: Head | null) {
  let temp: Head | null = head;
  let str = "";
  while (temp !== null) {
    str += temp.data + "->";
    temp = temp.next;
  }
  str += "x";
  console.log(str);
}

function addAtTail(head: Head | null, data: number) {
  if (head === null) {
    return addAtHead(head, data);
  }
  let temp: Head = head;
  while (temp?.next !== null) {
    temp = temp?.next;
  }

  let newNode: Head | null = createNewNode(data);
  temp.next = newNode;
  return head;
}

function removeAtHead(head: Head | null) {
  if (head === null) return null;

  let temp: Head = head;
  head = head.next;
  temp.next = null;
  return head;
}

function removeAtTail(head: Head | null) {
  if (head === null || head.next === null) return null;

  let temp: Head | null = head;
  while (temp.next && temp.next.next !== null) {
    temp = temp.next;
  }
  temp.next = null;
  return head;
}

function addAtIndex(head: Head | null, index: number, data: number) {
  if (head == null) return null;
  if (index === 0) return addAtHead(head, data);

  let newNode = createNewNode(data);
  let prev: Head | null = null;
  let temp: Head | null = head;
  let cnt = 0;
  while (temp) {
    if (cnt === index) {
      if (prev) {
        prev.next = newNode;
      }
      newNode.next = temp;
      return head;
    }
    prev = temp;
    temp = temp.next;
    cnt++;
  }

  if (cnt === index) {
    if (prev) {
      prev.next = newNode;
    }
  }

  return head;
}

function removeAtIndex(head: Head | null, index: number) {
  if (head === null) return null;
  if (index === 0) return removeAtHead(head);

  let temp: Head | null = head;
  let cnt = 0;
  let prev: Head | null = null;

  while (temp) {
    if (cnt === index) {
      if (prev) {
        prev.next = temp.next;
        temp.next = null;
        return head;
      }
    }
    cnt++;
    prev = temp;
    temp = temp.next;
  }

  if (cnt <= index) {
    console.error("Index out of bounds");
    return head;
  }

  return head;
}
let head = null;

head = addAtHead(head, 30);
head = addAtHead(head, 20);
head = addAtHead(head, 10);
head = addAtTail(head, 40);
// head = removeAtHead(head);
// head = removeAtTail(head);
head = addAtIndex(head, 4, 99);
head = removeAtIndex(head, 6);
printLL(head);

// console.log(head);
