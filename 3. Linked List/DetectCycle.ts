// https://leetcode.com/problems/linked-list-cycle/description/

function hasCycle(head: ListNode | null): boolean {
  let slow: ListNode | null = head;
  let fast: ListNode | null = head;

  if (!head || !head.next) return false;

  while (slow && fast) {
    slow = slow.next;
    fast = fast.next ? fast.next.next : null;
    if (slow === fast) {
      return true;
    }
  }
  return false;
}
