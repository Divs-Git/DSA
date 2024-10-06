// https://leetcode.com/problems/add-two-numbers-ii/
function rev(head: ListNode | null): ListNode | null {
  if (head === null || head.next === null) {
    return head;
  }
  let prev = null;
  let curr = head;
  while (curr) {
    let nextNode = curr.next;
    curr.next = prev;
    prev = curr;
    curr = nextNode;
  }
  return prev;
}
function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  let newL1 = rev(l1);
  let newL2 = rev(l2);

  let t1 = newL1;
  let t2 = newL2;
  let res = null;
  let resHead = null;
  let carry = 0;
  while (t1 || t2) {
    let d1 = t1 ? t1.val : 0;
    let d2 = t2 ? t2.val : 0;
    let sum = d1 + d2 + carry;

    let digit = sum % 10;
    carry = Math.floor(sum / 10);

    let newNode = new ListNode(digit);
    if (res === null) {
      resHead = newNode;
      res = resHead;
    } else {
      res.next = newNode;
      res = newNode;
    }

    if (t1) t1 = t1.next;
    if (t2) t2 = t2.next;
  }

  if (carry !== 0) {
    let newNode = new ListNode(carry);
    res.next = newNode;
    res = newNode;
  }

  return rev(resHead);
}
