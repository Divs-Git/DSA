// https://leetcode.com/problems/middle-of-the-linked-list/description/

function middleNode(head: ListNode | null): ListNode | null {
  let slow: ListNode | null = head;
  let fast: ListNode | null = head;

  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  if (fast.next) {
    return slow.next;
  }

  return slow;
}
