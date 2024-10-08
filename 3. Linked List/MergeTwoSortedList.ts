// https://leetcode.com/problems/merge-two-sorted-lists/description/

function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  let dummyHead: ListNode | null = new ListNode(-1);
  let temp: ListNode | null = dummyHead;
  let i: ListNode | null = list1;
  let j: ListNode | null = list2;

  while (i && j) {
    if (i.val < j.val) {
      temp.next = i;
      temp = temp.next;
      i = i.next;
      temp.next = null;
    } else {
      temp.next = j;
      temp = temp.next;
      j = j.next;
      temp.next = null;
    }
  }

  if (!i) {
    temp.next = j;
  } else {
    temp.next = i;
  }

  return dummyHead.next;
}
