// https://leetcode.com/problems/intersection-of-two-linked-lists/description/
function getIntersectionNode(
  headA: ListNode | null,
  headB: ListNode | null
): ListNode | null {
  let t1: ListNode | null = headA;
  let t2: ListNode | null = headB;

  let l1 = 0;
  let l2 = 0;
  while (t1) {
    l1++;
    t1 = t1.next;
  }
  t1 = headA;
  while (t2) {
    l2++;
    t2 = t2.next;
  }
  t2 = headB;

  if (l1 > l2) {
    let diff = l1 - l2;
    while (diff) {
      t1 = t1.next;
      diff--;
    }
  } else {
    let diff = l2 - l1;
    while (diff) {
      t2 = t2.next;
      diff--;
    }
  }

  while (t1 && t2) {
    if (t1 === t2) {
      return t1;
    }
    t1 = t1.next;
    t2 = t2.next;
  }
  return null;
}
