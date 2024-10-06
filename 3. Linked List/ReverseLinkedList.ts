// https://leetcode.com/problems/reverse-linked-list/description/

//1. Iterative - Pointer variation
function reverseList(head: ListNode | null): ListNode | null {
  if (head === null) return null;
  let curr = head;
  let prev = null;
  let nextNode = curr.next;

  while (curr) {
    nextNode = curr.next;
    curr.next = prev;
    prev = curr;
    curr = nextNode;
  }

  return prev;
}

//2. Recursive Approach - Pointer variation
function recursiveRev(curr: ListNode | null): ListNode | null {
  if (curr.next === null) return curr;
  let newHead = recursiveRev(curr.next);

  curr.next.next = curr;
  curr.next = null;
  return newHead;
}

function reverseList(head: ListNode | null): ListNode | null {
  if (head === null) return null;
  return recursiveRev(head);
}

// 3. Recursive Approach - Data manipulation
let start = null;
function func(curr: ListNode | null) {
  if (curr === null) return false;

  let result = func(curr.next);
  if (result === false) {
    [start.val, curr.val] = [curr.val, start.val];
    let bpCheck = start === curr || start.next === curr;
    start = start.next;
    return bpCheck;
  } else {
    return result;
  }
}

function reverseList(head: ListNode | null): ListNode | null {
  if (head === null) {
    return null;
  }
  start = head;
  func(head);
  return head;
}
