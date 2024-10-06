// https://leetcode.com/problems/add-two-numbers/description/

function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  let temp1 = l1;
  let temp2 = l2;
  let carry = 0;
  let resHead: ListNode | null = null;
  let res: ListNode | null = null;

  while (temp1 || temp2) {
    let d1 = temp1 ? temp1.val : 0;
    let d2 = temp2 ? temp2.val : 0;
    let sum = d1 + d2 + carry;
    let digit = sum % 10;
    carry = Math.floor(sum / 10);

    let newNode = new ListNode(digit);
    if (!resHead) {
      res = newNode;
      resHead = newNode;
    } else {
      res.next = newNode;
      res = newNode;
    }
    if (temp1) temp1 = temp1.next;
    if (temp2) temp2 = temp2.next;
  }
  if (carry !== 0) {
    let newNode = new ListNode(carry);
    res.next = newNode;
    res = newNode;
  }
  return resHead;
}
