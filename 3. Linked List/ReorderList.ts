// https://leetcode.com/problems/reorder-list/description/
let start: ListNode | null = null;
function f(end) {
  if (end === null) return false;
  let b = f(end.next);

  if (!b && (start.next === end || start === end)) {
    end.next = null;
    return true;
  }

  if (b === false) {
    let nextOfStart: ListNode | null = start.next;
    start.next = end;
    end.next = nextOfStart;
    start = nextOfStart;
  }
  return b;
}

/**
 Do not return anything, modify head in-place instead.
 */
function reorderList(head: ListNode | null): void {
  if (head === null) return null;
  start = head;
  f(head);
}
