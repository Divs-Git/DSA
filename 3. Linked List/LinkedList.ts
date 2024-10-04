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

let head = null;

head = addAtHead(head, 30);
head = addAtHead(head, 20);
head = addAtHead(head, 10);
head = addAtTail(head, 40);
head = removeAtHead(head);
head = removeAtTail(head);
printLL(head);

// console.log(head);
