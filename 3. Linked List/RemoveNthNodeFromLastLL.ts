// https://leetcode.com/problems/remove-nth-node-from-end-of-list/

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  if (head === null || head.next === null) return null;

  let lo: ListNode | null = head;
  let hi: ListNode | null = head;
  let cnt: number = 1;

  while (cnt < n + 1 && hi != null) {
    hi = hi.next;
    cnt++;
  }

  if (hi == null) {
    let temp: ListNode | null = head;
    head = head.next;
    temp.next = null;
    return head;
  }

  while (hi.next != null) {
    lo = lo.next;
    hi = hi.next;
  }
  let nodeToBeRemoved: ListNode | null = lo.next;
  lo.next = lo.next.next;
  nodeToBeRemoved.next = null;
  return head;
}
